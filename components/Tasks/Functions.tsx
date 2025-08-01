"use client";

import React, { JSX } from "react";
import { useState } from "react";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Functions = (): JSX.Element => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    //const [selectedUser, setSelectedUser] = useState<string>("vineet");
    //const [status, setStatus] = useState<string>("All");

  return (
    <div className="w-full flex justify-between px-10 rounded-md border border-[#E9EDF7]">
      <div className="w-[301px] relative my-7">
        <input
          type="text"
          placeholder="Search Task"
          className="w-full pl-6 py-4.5 bg-white rounded-lg border border-[#E9EDF7] shadow-[0_5px_5px_rgba(0,0.1,0,0.20)] text-sm placeholder:text-[#D9D9D9] outline-none"
        />
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          <Image
            src="/document/search.svg"
            width={20}
            height={20}
            alt="Search"
          />
        </span>
      </div>

      <div className="relative w-[193px] my-7">
        <label
          htmlFor="assigned-user"
          className="absolute top-1 left-3 italic text-[14px] text-[#333] bg-white px-1 z-10 -translate-y-2/3 "
        >
          Assigned to
        </label>
        <select
          id="assigned-user"
          className="w-full py-4 focus:outline-none pr-10 pl-3 text-[16px] text-[#D9D9D9] rounded-xl border border-[#E9EDF7] shadow-[0_5px_5px_rgba(0,0.1,0,0.20)] bg-white appearance-none"
        >
          <option value="vineet">vineet</option>
          <option value="harsh">harsh</option>
          <option value="premal">premal</option>
        </select>
        <Image
          src="/sidebar/down-arrow.svg"
          width={16}
          height={16}
          alt="Arrow Down"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      </div>

      <div className="relative w-[193px] my-7 ">
        <label
          htmlFor="user-status"
          className="absolute top-1 left-3 italic text-[14px] text-[#333] bg-white px-1 z-10 -translate-y-2/3 "
        >
          Status
        </label>
        <select
          id="assigned-user"
          className="w-full py-4 pr-10 pl-3 text-[16px] text-[#D9D9D9] rounded-xl border border-[#E9EDF7] shadow-[0_5px_5px_rgba(0,0.1,0,0.20)] bg-white appearance-none focus:outline-none"
          defaultValue="All"
        >
          <option>All</option>
          <option value="pending">Pending</option>
          <option value="in-process">In Process</option>
          <option value="completed">Completed</option>
        </select>
        <Image
          src="/sidebar/down-arrow.svg"
          width={16}
          height={16}
          alt="Arrow Down"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      </div>

      <div className="relative w-[193px] my-7 ">
        <label
          htmlFor="user-date"
          className="absolute top-1 left-3 italic text-[14px] text-[#333] bg-white px-1 z-10 -translate-y-2/3 pointer-events-none"
        >
          Date
        </label>
        <DatePicker
          id="user-date"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select Date"
          dateFormat="yyyy-MM-dd"
          className="w-full py-4 pr-10 pl-3 text-[16px] text-[#D9D9D9] rounded-xl border border-[#E9EDF7] shadow-[0_5px_5px_rgba(0,0.1,0,0.20)] bg-white focus:outline-none"
        />
        <Image
          src="/sidebar/down-arrow.svg"
          width={16}
          height={16}
          alt="Arrow Down"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Functions;
