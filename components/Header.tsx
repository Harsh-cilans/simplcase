"use client";

import React from "react";
import Image from "next/image";
import { JSX } from "react";

const Header = (): JSX.Element => {
  return (
    <div className="relative h-[61px] flex items-center justify-between top-20 sm:top-5.5 px-4 sm:px-6 py-3 bg-white rounded-none z-30">
      {/* Search Input */}
      <div className="flex-grow sm:flex-none mb-2 sm:mb-0">
        <input
          type="text"
          placeholder="Search your case"
          className="bg-[#8794BA33] outline-none rounded-full w-full sm:w-[839px] py-2 px-4 placeholder:text-[#424243]"
        />
      </div>

      {/* Action Icons */}
      <div className="flex-row sm:flex items-center justify-end mb-5 sm:mb-0 space-x-4 px-4">
        <button className="cursor-pointer">
          <Image
            src="/header/notification.svg"
            height={24}
            width={24}
            alt="Notification"
            className="mb-2 sm:mb-0"
          />
        </button>

        <button className="cursor-pointer">
          <Image
            src="/header/theme.svg"
            height={18}
            width={18}
            alt="Theme"
            className="mb-2.5 sm:mb-0"
          />
        </button>

        <button className="cursor-pointer">
          <Image
            src="/header/profile.svg"
            height={41}
            width={41}
            alt="Profile"
            className="mt-4 sm:mt-0"
          />
        </button>
      </div>
      
    </div>
  );
};

export default Header;
