'use client';

import React from 'react';

const Category: React.FC = () => {
  const categories: string[] = [
    '1. Lorem Ipsum',
    '2. Lorem Ipsum',
    '3. Lorem Ipsum',
    '4. Lorem Ipsum',
    '5. Lorem Ipsum',
  ];

  return (
    <div className="w-full mt-5 sm:mt-10 px-4 sm:px-25">
      <div className="flex flex-wrap gap-3 sm:gap-4">
        <button className="bg-[#022BA1] text-white px-5 py-2 rounded-full text-xs sm:text-xs cursor-pointer">
          Categories
        </button>
        {categories.map((cat, i) => (
          <button
            key={i}
            className="bg-[#022BA1] text-white px-5 py-2 rounded-full text-xs sm:text-xs cursor-pointer"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
