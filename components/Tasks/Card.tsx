"use client";

import React, { JSX } from "react";
import Image from "next/image";
import Add from "./Add";

// Task item type, with lowercase priority type for standardization
type Priority = "high" | "medium" | "low";

interface CardProps {
  Date: string;
  AssignedDate: string;
  priority: string; // Keep as string to match incoming data
  taskName: string;
  User: string;
}

interface ImageInfo {
  src: string;
  alt: string;
}

const priorityImageMap: Record<Priority, ImageInfo> = {
  high: { src: "/task/high-prior.svg", alt: "High Priority" },
  medium: { src: "/task/md-prior.svg", alt: "Medium Priority" },
  low: { src: "/task/low-prior.svg", alt: "Low Priority" },
};

// Array should be typed as CardProps[]
const assignedTask: CardProps[] = [
  {
    Date: "2023-10-01",
    AssignedDate: "Jan 18",
    priority: "High Priority",
    taskName: "Complete the project documentation",
    User: "Matter You",
  },
  {
    Date: "2023-10-01",
    AssignedDate: "Jan 18",
    priority: "High Priority",
    taskName: "Complete the project documentation",
    User: "Matter You",
  },
  {
    Date: "2023-10-01",
    AssignedDate: "Jan 18",
    priority: "Medium Priority",
    taskName: "Complete the project documentation",
    User: "Matter You",
  },
  {
    Date: "2023-10-01",
    AssignedDate: "Jan 18",
    priority: "Low Priority",
    taskName: "Complete the project documentation",
    User: "Matter You",
  },
];

const Card = (): JSX.Element => {
  return (
    <div className="h-[556px] overflow-y-auto p-4 scrollbar-thin-custom">
      {assignedTask.map((task, index) => {
        // Standardize priority case
        const lowerPriority = task.priority
          .split(" ")[0]
          .toLowerCase() as Priority;
        // Fallback image if priority not recognized
        const { src, alt } = priorityImageMap[lowerPriority] || {
          src: "/task/default.svg",
          alt: "Unspecified Priority",
        };

        return (
          <div
            key={index}
            className="bg-white px-3 py-2 rounded-lg shadow-[0_5px_5px_rgba(0,0.1,0,0.20)] mb-4"
          >
            <p className="text-xs text-gray-600 flex items-center gap-2">
              <Image src={src} width={10} height={10} alt={alt} />
              <span>{task.priority}</span>
            </p>
            <span className="flex items-center">
              <h3 className="text-xs mt-1 font-semibold">{task.taskName}</h3>
              <p className="text-[10px] text-[#999999]">{task.AssignedDate}</p>
            </span>
            <p className="text-[10px] text-[#999999] mt-1">{task.User}</p>

            <hr className="text-[#E9EDF7] my-1" />

            <span className="flex gap-2 items-center justify-between text-xs text-[#999999]">
              <span className="flex items-center gap-1">
                <Image
                  src="/header/profile.svg"
                  width={25}
                  height={10}
                  alt="Calendar Icon"
                />

                <span className="border-r border-[#E9EDF7]"></span>
                <p className="text-xs">{task.Date}</p>
              </span>

              <span className="flex items-center gap-1">
                <span className="flex items-center gap-1 ml-2">
                  <Image
                    src="/task/attachment.svg"
                    width={10}
                    height={10}
                    alt="Attachment"
                  />
                  <span>3</span>
                </span>

                <span className="flex items-center gap-1 ml-2">
                  <Image
                    src="/task/chat.svg"
                    width={14}
                    height={14}
                    alt="Chat"
                  />
                  <span>4</span>
                </span>
              </span>
            </span>
          </div>
        );
      })}
      <Add />
    </div>
  );
};

export default Card;
