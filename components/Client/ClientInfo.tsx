"use client";

import Image from "next/image";
import React from "react";
import { JSX } from "react";

const ClientInfo = (): JSX.Element => {
  return (
    <div className="relative w-full mt-8 px-4">
      {/* Header Section */}
      <div className="flex flex-col sm:ml-21 sm:flex-row sm:items-center justify-between gap-4">
        {/* Title */}
        <div className="text-[#1A2A42]">
          <h1 className="text-lg sm:text-xl font-semibold">All Clients</h1>
          <p className="italic text-xs">
            Manage your contacts and access their documents
          </p>
        </div>

        {/* Export & Add New Client */}
        <div className="flex flex-wrap sm:flex-nowrap gap-2">
          {/* Export Dropdown */}
          <div className="relative group">
            <button className="flex items-center px-4 py-2 gap-2 bg-[#1A2A42] text-white rounded-full">
              <span className="text-sm">Export</span>
              <Image
                src="/document/export.svg"
                width={15}
                height={15}
                alt="Export"
              />
            </button>
            {/* Dropdown */}
            <div className="hidden group-hover:block absolute right-0 mt-1 bg-[#F9FAFB] rounded-xl border-2 border-[#E9EDF7] z-10 min-w-[100px]">
              <ul className="p-0">
                <li className="py-2 px-5 flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-2 accent-white" />
                  CSV
                </li>
                <li className="py-2 px-5 flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-2 accent-white" />
                  PDF
                </li>
              </ul>
            </div>
          </div>

          {/* Add New Client */}
          <button className="flex items-center px-4 py-2 gap-2 bg-[#1A2A42] text-white rounded-full">
            <span className="text-sm">Add New Client</span>
            <Image
              src="/document/add-icon.svg"
              width={12}
              height={12}
              alt="Add"
            />
          </button>
        </div>
      </div>

      <hr className="text-[#E9EDF7] my-5" />

      {/* Search + Actions */}
      <div className="flex flex-col sm:flex sm:items-center sm:justify-between gap-4 mt-4">
        {/* Search */}
        <div className="w-full sm:w-auto sm:flex sm:items-center sm:justify-between sm:gap-100 ">
          <div className="w-full max-w-[368px] relative sm:ml-21">
            <input
              type="text"
              placeholder="Search Clients"
              className="w-full pl-6 pr-60 py-2 bg-white rounded-full border border-gray-300 shadow-sm text-sm placeholder:text-[#D9D9D9] outline-none"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Image
                src="/document/search.svg"
                width={14}
                height={14}
                alt="Search"
              />
            </span>
          </div>

          {/* Date */}
          <button className="flex items-center mt-4 gap-2 bg-[#1A2A42] text-white px-4 py-2 rounded-full whitespace-nowrap">
            <Image src="/calender.svg" width={12} height={12} alt="Calendar" />
            <span className="text-sm">Jan 22, 2024 - Jan 31, 2024</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-3 w-full sm:w-full sm:justify-end">
          {/* Filter */}
          <button className="flex items-center gap-2 bg-[#1A2A42] text-white px-4 py-2 rounded-full whitespace-nowrap">
            <Image
              src="/document/filter.svg"
              width={12}
              height={12}
              alt="Filter"
            />
            <span className="text-sm">Filter</span>
          </button>

          {/* Sort */}
          <button className="flex items-center gap-2 bg-[#1A2A42] text-white px-4 py-2 rounded-full whitespace-nowrap">
            <span className="text-sm">Sorting by: A - Z</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
