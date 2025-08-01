"use client";

import React, { JSX } from "react";
import Functions from "./Functions";
import Pending from "./Pending";
import Complete from "./Complete";
import InProcess from "./InProcess";

const Task = (): JSX.Element => {
  return (
    <div className="w-full bg-white rounded-lg border border-[#E9EDF7] shadow-[0_7px_5px_rgba(0,0.1,0,0.1)]">
      <Functions />

      <div className="flex justify-between px-10 py-3">
        <Pending />
        <InProcess />
        <Complete />
      </div>
    </div>
  );
};

export default Task;
