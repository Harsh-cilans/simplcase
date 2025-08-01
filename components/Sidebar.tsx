"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { JSX } from "react";
import { useAppContext } from "@/context/AppContext";

const Sidebar = (): JSX.Element => {
  const { setDropDown, dropDown, doc, router } = useAppContext();

  return (
    <div className="w-full sm:w-[356px] min-h-screen shadow-[inset_-6px_0_8px_-4px_rgba(0,0,0,0.05)] flex flex-col overflow-y-auto sm:overflow-y-hidden">
      {/* LCMS */}
      {/* LCMS Logo (visible on all screens, styled differently) */}
      <div onClick={() => router.push("/")} className="flex justify-center items-center cursor-pointer">
        <Image src="/logo.svg" height={56} width={40} alt="Logo" />
        <div className="text-[#1A2A42] logo font-bold text-4xl tracking-wide py-8 px-5 mb-2 sm:block hidden">
          Simple Case
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="text-[#1A2A42] sm:h-[675px] text-[14px] flex-grow">
        <hr className="text-[#E9EDF7]" />

        {/* Home */}
        <Link
          href="/"
          className="flex items-center mx-5 my-2 sm:my-4 hover:bg-[#8794BA33] rounded-full w-full sm:w-[308px] py-2"
        >
          <Image
            src="/sidebar/home.svg"
            width={18}
            height={19}
            alt="Home"
            className="mx-4 mr-5"
          />
          <span className="mt-0.5 font-semibold">Home</span>
        </Link>

        <hr className="text-[#E9EDF7]" />

        {/* Dashboard */}
        <Link
          href="/dashboard"
          className="flex items-center mx-5 my-2 sm:my-4 hover:bg-[#8794BA33] rounded-full w-full sm:w-[308px] py-2"
        >
          <Image
            src="/sidebar/gauge.svg"
            width={21}
            height={14}
            alt="Dashboard"
            className="mx-4 mr-5"
          />
          <span className="mt-0.5">Dashboard</span>
        </Link>

        <hr className="text-[#E9EDF7]" />

        {/* Clients Dropdown */}
        <button
          className="flex items-center mx-5 my-2 sm:my-4 py-2 cursor-pointer rounded-full w-full sm:w-[308px] hover:bg-[#8794BA33]"
          onClick={() => setDropDown(!dropDown)}
        >
          <Image
            src="/sidebar/down-arrow.svg"
            width={18}
            height={6}
            alt="Active Clients"
            className="mx-4 mr-5"
          />
          <span>Active Clients</span>
        </button>

        {/* Dropdown Items */}
        {dropDown && (
          <Link
            href="/new-client"
            className="flex items-center mx-5 my-2 w-full sm:w-[308px]"
          >
            <Image
              src="/sidebar/circle.svg"
              width={24}
              height={24}
              alt="New Clients"
              className="mx-4 mr-5"
            />
            <span className="mt-0.5 text-black">New Clients</span>
          </Link>
        )}

        <hr className="text-[#E9EDF7]" />

        {/* Archived Projects */}
        <Link
          href="/archived-projects"
          className="flex items-center mx-5 my-2 sm:my-4 hover:bg-[#8794BA33] rounded-full py-2 w-full sm:w-[308px]"
        >
          <Image
            src="/sidebar/right-arrow.svg"
            width={11}
            height={24}
            alt="Archived Projects"
            className="mx-4 mr-5"
          />
          <span className="mt-0.5">Archived Projects</span>
        </Link>
      </div>

      <hr className="text-[#E9EDF7] mt-20" />

      {/* Bottom Section */}
      <div className="text-[#1A2A42] text-[10px]">
        <Link
          href="/archived-projects"
          className="flex items-center mx-5 my-2 w-full sm:w-[308px] hover:bg-[#8794BA33] rounded-full py-2"
        >
          <Image
            src="/sidebar/sparkle.svg"
            width={18}
            height={18}
            alt="Document Limit"
            className="mx-4 mr-5 "
          />
          <span className="mt-0.5">{doc} doc left. Get more</span>
        </Link>

        <Link
          href="/archived-projects"
          className="flex items-center mx-5 my-2 w-full sm:w-[308px] hover:bg-[#8794BA33] rounded-full py-2"
        >
          <Image
            src="/sidebar/settings.svg"
            width={18}
            height={18}
            alt="Settings"
            className="mx-4 mr-5"
          />
          <span className="mt-0.5">Setting & Members</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
