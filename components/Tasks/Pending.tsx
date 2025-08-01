"use client";

import React, { JSX } from "react";
import Image from "next/image";
import Card from "./Card";

const Pending = (): JSX.Element => {
  return (
    <div className="bg-[#E9EDF7] w-[301px] rounded-lg shadow-[0_5px_5px_rgba(0,0.1,0,0.20)]">
      <div className="flex items-center justify-between px-4 mt-4">
        <span className="text-sm">Pending</span>
        <Image
          src="/task/add-icon.svg"
          width={14}
          height={14}
          alt="Add Task"
          className="ml-2 cursor-pointer"
        />
      </div>

      <Card />
    </div>
  );
};

export default Pending;
