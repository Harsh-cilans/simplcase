"use client";

import React from "react";
import Image from "next/image";
import { JSX } from "react";

// Define props type
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}): JSX.Element => {
  const getPages = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        if (i !== 1 && i !== totalPages) pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="relative flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 mt-6 sm:my-6  text-xs sm:text-sm px-4 overflow-x-auto">
      {/* Prev */}
      <button
        className={`w-9 h-9 rounded-md flex items-center justify-center ${
          currentPage === 1
            ? "bg-[#F5F5F5] cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <Image src="/lt.svg" width={12} height={7.5} alt="Previous" />
      </button>

      {/* Page Numbers */}
      {getPages().map((page, index) => (
        <button
          key={index}
          className={`w-9 h-9 rounded-md border flex items-center justify-center text-sm font-semibold ${
            page === currentPage
              ? "border-[#022BA1] text-[#999999] bg-white"
              : typeof page === "number"
              ? "border-gray-200 text-[#999999] hover:bg-gray-100"
              : "border-gray-200 text-gray-500 cursor-default"
          }`}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={typeof page !== "number"}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        className={`w-9 h-9 rounded-md flex items-center justify-center ${
          currentPage === totalPages
            ? "bg-[#F5F5F5] cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <Image src="/gt.svg" width={12} height={7.5} alt="Next" />
      </button>
    </div>
  );
};

export default Pagination;
