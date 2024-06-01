//OrderTypeDropDown

"use client";

import React, { useState } from "react";

const OrderTypeDropDown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="p-5 text-white shadow-lg space-y-4">
      <h1 className="text-lg">Select Order Type</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 space-y-1">
        <button
          className={`border-gray-500 border p-1 px-5 rounded-full ${
            selectedOptions.includes("Health & Medicine")
              ? "bg-blue-500 text-white"
              : ""
          }`}
          onClick={() => handleOptionClick("Health & Medicine")}
        >
          Health & Medicine
        </button>
        <button
          className={`border-gray-500 border p-1 px-5 rounded-full ${
            selectedOptions.includes("Electronics")
              ? "bg-blue-500 text-white"
              : ""
          }`}
          onClick={() => handleOptionClick("Electronics")}
        >
          Electronics
        </button>
        <button
          className={`border-gray-500 border p-1 px-5 rounded-full ${
            selectedOptions.includes("Clothing") ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleOptionClick("Clothing")}
        >
          Clothing
        </button>
        <button
          className={`border-gray-500 border p-1 px-5 rounded-full ${
            selectedOptions.includes("Books") ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleOptionClick("Books")}
        >
          Books
        </button>
      </div>

      <div className="flex flex-col space-y-6">
        <span className="text-sm text-gray-500 text-left mt-3">
          *You can choose multiple Order types
        </span>
        <div className="flex justify-center">
          <button className="bg-blue-1 text-white p-2 px-6 rounded-xl text-sm w-fit text-center">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTypeDropDown;
