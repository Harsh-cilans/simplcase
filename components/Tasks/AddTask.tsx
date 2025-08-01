"use client";

import React, { JSX } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const AddTask = (): JSX.Element => {
  const { setShowAddTask } = useAppContext();
  return (
    <div className="relative bg-white w-[843px] px-6 py-10 rounded-lg shadow-[0_5px_5px_rgba(0,0.1,0,0.20)]">
      <form>
        <h1 className="text-2xl font-semibold">Add Tasks/ Task Details</h1>
        <p className="italic">Description</p>
        <div className="border border-[#E9EDF7] mb-8 h-30 rounded-lg w-full py-3 px-4 shadow-[0_5px_5px_rgba(0,0.1,0,0.20)]">
          <div className="flex gap-3">
            <p className="flex gap-0.5">
              <span className="text-md">Aa</span>
              <Image
                src="/sidebar/down-arrow.svg"
                width={7}
                height={4}
                alt=""
                className="mt-1.5 cursor-pointer"
              />
            </p>

            <span className="border-r border-[#E9EDF7]"></span>

            <Image
              src="/task/bold.svg"
              width={12}
              height={15}
              alt="Bold"
              className="cursor-pointer"
            />

            <Image
              src="/task/italic.svg"
              width={14}
              height={15}
              alt="Italic"
              className="cursor-pointer"
            />
          </div>

          <hr className="text-[#E9EDF7] my-1.5" />

          <textarea
            className="w-full bg-transparent outline-none text-xs placeholder:text-[#D9D9D9] placeholder:text-xs resize-none"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
            rows={3} // or any number of rows you want to show by default
          />
        </div>

        <div className="relative mt-4 mb-8">
          <label
            htmlFor="taskname"
            className="absolute top-1 left-6 italic text-[14px] bg-white px-5 z-10 -translate-y-2/3 "
          >
            Task Name
          </label>
          <input
            id="taskname"
            type="text"
            placeholder="ABC"
            className="border border-[#E9EDF7] outline-none text-sm placeholder:px-2 placeholder:text-[#D9D9D9]  rounded-lg py-3 px-4 w-full shadow-[0_5px_5px_rgba(0,0.1,0,0.20)]"
          />
        </div>

        <div className="flex justify-between mb-8">
          <div className="relative w-93">
            <label
              htmlFor="case-name"
              className="absolute top-1 left-6 italic text-[14px] bg-white px-5 z-10 -translate-y-2/3 "
            >
              Case Name
            </label>
            <input
              id="case-name"
              type="text"
              placeholder="ABC"
              className="border border-[#E9EDF7] outline-none text-sm w-full placeholder:px-2 placeholder:text-[#D9D9D9]  rounded-lg py-3 px-4 shadow-[0_5px_5px_rgba(0,0.1,0,0.20)]"
            />
          </div>
          <div className="relative w-93">
            <label
              htmlFor="client-name"
              className="absolute top-1 left-6 italic text-[14px] bg-white px-5 z-10 -translate-y-2/3 "
            >
              Client Name
            </label>
            <input
              id="client-name"
              type="text"
              placeholder="Rahul Shah"
              className="border border-[#E9EDF7] outline-none text-sm w-full placeholder:px-2 placeholder:text-[#D9D9D9]  rounded-lg py-3 px-4 shadow-[0_5px_5px_rgba(0,0.1,0,0.20)]"
            />
          </div>
        </div>
        <div className="relative gap-4 mb-8">
          <label
            htmlFor="assigned-to"
            className="absolute top-1 left-6 italic text-[14px] bg-white px-5 z-10 -translate-y-2/3 "
          >
            Assigned To
          </label>
          <input
            id="assigned-to"
            type="text"
            placeholder="ABC DEF GHI JKL MNO"
            className="border border-[#E9EDF7] placeholder:px-2 outline-none text-sm placeholder:text-[#D9D9D9]  rounded-lg py-3 px-4 w-full shadow-[0_5px_5px_rgba(0,0.1,0,0.20)]"
          />
        </div>

        <div className="flex justify-between mb-8">
          <div className="relative w-93">
            <label
              htmlFor="creation-date"
              className="absolute top-1 left-6 italic text-[14px] bg-white px-5 z-10 -translate-y-2/3 "
            >
              Creation Dates
            </label>
            <input
              id="creation-date"
              type="date"
              placeholder=""
              className="border border-[#E9EDF7] w-full placeholder:px-2 placeholder:text-[#D9D9D9]  rounded-lg py-3 px-4 shadow-[0_5px_5px_rgba(0,0.1,0,0.20)]"
            />
          </div>
          <div className="relative w-93">
            <label
              htmlFor="due-date"
              className="absolute top-1 left-6 italic text-[14px] bg-white px-5 z-10 -translate-y-2/3 "
            >
              Due Dates
            </label>
            <input
              id="due-date"
              type="date"
              placeholder=""
              className="border border-[#E9EDF7] w-full placeholder:px-2 placeholder:text-[#D9D9D9]  rounded-lg py-3 px-4 shadow-[0_5px_5px_rgba(0,0.1,0,0.20)]"
            />
          </div>
        </div>

        <div className="relative gap-4 mb-10">
          <label
            htmlFor="status"
            className="absolute top-1 left-6 italic text-[14px] bg-white px-5 z-10 -translate-y-2/3 "
          >
            Status
          </label>
          <input
            id="status"
            type="text"
            placeholder="ABC DEF GHI JKL MNO"
            className="border border-[#E9EDF7] placeholder:px-2 outline-none text-sm placeholder:text-[#D9D9D9]  rounded-lg py-3 px-4 w-full shadow-[0_5px_5px_rgba(0,0.1,0,0.20)]"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={() => setShowAddTask(false)}
            className="text-sm cursor-pointer hover:bg-[#022BA1] hover:text-white rounded-full px-8 py-2"
          >
            Cancel
          </button>
          <button className="bg-[#022BA1] rounded-full px-8 py-2 text-white text-sm cursor-pointer">
            Submit
          </button>
        </div>

        <Image
          onClick={() => setShowAddTask(false)}
          src="/task/cancel.svg"
          width={20}
          height={20}
          alt="Cancel"
          className="absolute top-12 right-5 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddTask;
