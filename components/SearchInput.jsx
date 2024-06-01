"use client";

import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri"; // Import the search icon from React Icons

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative max-sm:hidden">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <RiSearchLine className="text-gray-400" /> {/* Search icon */}
      </span>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="pl-10 pr-4 py-2 w-80 rounded-full  text-white bg-dark-1 border border-gray-500 focus:outline-none focus:border-blue-500 "
      />
    </div>
  );
};

export default SearchInput;
