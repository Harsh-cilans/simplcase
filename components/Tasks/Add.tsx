"use client";

import React, { JSX } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const Add = (): JSX.Element => {
  const {setShowAddTask} = useAppContext();
  return (
    <div className="p-3 h-[41px] bg-white rounded-lg shadow-[0_5px_5px_rgba(0,0.1,0,0.20)]">
      <Image
        onClick={() => setShowAddTask(true)}
        className="cursor-pointer"
        src="/task/add-icon.svg"
        width={15}
        height={15}
        alt="Add Task"
      />
    </div>
  );
};

export default Add;
