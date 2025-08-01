"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faSliders } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { label: "Clients", icon: "/navbar/client.svg" },
  { label: "Case", icon: "/navbar/document.svg" },
  { label: "Documents", icon: "/navbar/document.svg" },
  { label: "Tasks", icon: "/navbar/task.svg" },
  { label: "Cause List", icon: "/navbar/list.svg" },
  { label: "Events", icon: "/navbar/event.svg" },
  { label: "Messages", icon: "/navbar/msg.svg" },
  { label: "Expense Manager", icon: "/navbar/expense.svg" },
  { label: "Invoices", icon: "/navbar/invoice.svg" },
];

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-20 top-18 sm:top-11 px-4 sm:px-5 py-2 bg-white">
      {/* Toggle for Mobile */}
      <div className="flex sm:hidden justify-between items-center px-2">
        <h2 className="text-[#1A2A42] font-semibold text-lg">Navigation</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#1A2A42]">
          <FontAwesomeIcon icon={isOpen ? faXmark : faSliders} size="lg" />
        </button>
      </div>

      <div>
        <hr className="text-[#E9EDF7]" />
      </div>

      {/* Menu Items */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row text-[#1A2A42] w-full sm:rounded-b-[10px] sm:shadow-[0_7px_5px_rgba(0,0,0,0.30)] overflow-x-auto`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={`/${item.label.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center gap-2 px-4 py-3 border-b sm:border-b-0 sm:border-r border-gray-200 hover:bg-[#8794BA33] text-[14px] font-semibold"
          >
            <Image src={item.icon} alt={item.label} width={24} height={24} />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
