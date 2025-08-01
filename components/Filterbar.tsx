"use client";

import Image from "next/image";
import React from "react";
import { JSX } from "react";

const FilterBar = (): JSX.Element => {
  
  return (
    <div className="relative w-full mt-8 px-4">
      {/* Header Section */}
      <div className="flex flex-col sm:ml-21 sm:flex-row sm:items-center justify-between gap-4">
        {/* Title */}
        <div className="text-[#1A2A42]">
          <h1 className="text-lg sm:text-xl font-semibold">All Documents</h1>
          <p className="italic text-xs">Home {">"} My Documents</p>
        </div>

        {/* Search Input */}
        <div className="w-full sm:w-auto max-w-[368px] relative sm:ml-21">
          <input
            type="text"
            placeholder="Search Document"
            className="w-full pl-6 pr-14 py-2 bg-white rounded-full border border-gray-300 shadow-sm text-sm placeholder:text-[#D9D9D9] outline-none"
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
      </div>

      <hr className="text-[#E9EDF7] my-5" />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 mt-4">
        {/* Right Side Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap gap-2">
          <button className="flex items-center gap-2 bg-[#022BA1] text-white px-4 py-2 rounded-full whitespace-nowrap">
            <span className="text-xs">Filter</span>
            <Image
              src="/document/filter.svg"
              width={12}
              height={12}
              alt="Filter"
            />
          </button>
          <button className="flex items-center gap-2 bg-[#022BA1] text-white px-4 py-2 rounded-full whitespace-nowrap">
            <span className="text-xs">Export</span>
            <Image
              src="/document/export.svg"
              width={15}
              height={15}
              alt="Export"
            />
          </button>
          <button className="flex items-center gap-2 bg-[#022BA1] text-white px-4 py-2 rounded-full whitespace-nowrap">
            <span className="text-xs">Add New Document</span>
            <Image
              src="/document/add-icon.svg"
              width={12}
              height={12}
              alt="Add"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
