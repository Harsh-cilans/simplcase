"use client";

import React, { JSX, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import AddTask from "./AddTask";

const Info = (): JSX.Element => {
  const pathname = usePathname();
  const [dropdown, setDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { showAddTask, setShowAddTask } = useAppContext();

  const AddTaskHandler = () => {
    setShowAddTask(true);
    setDropDown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropDown(false);
      }
    };

    if (dropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  return (
    <div className="relative w-full mt-8 px-4">
      {/* Blur overlay when AddTask is shown */}
      <div className={showAddTask ? "pointer-events-none filter" : ""}>
        <div className="flex flex-col sm:ml-21 sm:flex-row sm:items-center justify-between gap-4">
          {/* Title */}
          <div className="text-[#1A2A42]">
            <h1 className="text-lg sm:text-xl font-semibold">Tasks</h1>
            <p className="italic text-xs">
              Home {"> " + pathname.charAt(1).toUpperCase() + pathname.slice(2)}
            </p>
          </div>

          {/* Export & Add New Client */}
          <div
            className="flex flex-wrap sm:flex-nowrap gap-2 relative"
            ref={dropdownRef}
          >
            {/* Add Task Button */}
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={dropdown}
              onClick={() => setDropDown((prev) => !prev)}
              className="flex items-center px-5 py-1.5 gap-4 bg-[#1A2A42] text-white rounded-full"
            >
              <span className="text-sm">Add Task</span>
              <Image
                src="/document/add-icon.svg"
                width={16}
                height={16}
                alt="Add Task"
              />
            </button>

            {/* Dropdown */}
            {dropdown && (
              <div className="absolute right-0 top-full mt-1 bg-[#F9FAFB] rounded-xl border-2 border-[#E9EDF7] z-10 w-[153px] shadow-lg">
                <ul className="p-2">
                  <li className="py-2 px-3 flex items-center cursor-pointer hover:bg-[#E9EDF7] rounded-md">
                    <button className="flex items-center gap-2 w-full">
                      <Image
                        src="/task/calender.svg"
                        width={15}
                        height={13}
                        alt="Calendar"
                      />
                      <span>Events</span>
                    </button>
                  </li>
                  <li className="py-2 px-3 flex items-center cursor-pointer hover:bg-[#E9EDF7] rounded-md">
                    <button className="flex items-center gap-2 w-full">
                      <Image
                        src="/task/note.svg"
                        width={15}
                        height={13}
                        alt="Notes"
                      />
                      <span>Notes</span>
                    </button>
                  </li>
                  <li className="py-2 px-3 flex items-center cursor-pointer hover:bg-[#E9EDF7] rounded-md">
                    <button className="flex items-center gap-2 w-full">
                      <Image
                        src="/task/@.svg"
                        width={15}
                        height={13}
                        alt="Email"
                      />
                      <span>Email</span>
                    </button>
                  </li>
                  <li className="py-2 px-3 flex items-center cursor-pointer hover:bg-[#E9EDF7] rounded-md">
                    <button
                      onClick={AddTaskHandler}
                      className="flex items-center gap-2 w-full"
                    >
                      <Image
                        src="/task/add-icon.svg"
                        width={15}
                        height={13}
                        alt="Add Task"
                      />
                      <span>Task</span>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="w-full sm:w-auto sm:flex sm:items-center sm:mt-5 sm:gap-8">
          <div className="max-w-[368px] relative sm:ml-21">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-6 pr-60 py-1.5 bg-white rounded-full border border-[#E9EDF7] shadow-sm text-sm placeholder:text-[#D9D9D9] outline-none"
              aria-label="Search tasks"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
              <Image
                src="/document/search.svg"
                width={14}
                height={14}
                alt="Search"
              />
            </span>
          </div>
          <button
            type="button"
            className="flex items-center gap-3 bg-[#022BA1] text-white px-6 py-1.5 rounded-full whitespace-nowrap"
            aria-label="Filter tasks"
          >
            <span className="text-sm">Filter</span>
            <Image
              src="/document/filter.svg"
              width={14}
              height={14}
              alt="Filter"
            />
          </button>
        </div>

        <hr className="text-[#E9EDF7] my-3" />
      </div>

      {/* AddTask overlay */}
      {showAddTask && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#D9D9D98C] bg-opacity-10">
          <AddTask />
        </div>
      )}
    </div>
  );
};

export default Info;
