"use client";

import React, { useState } from "react";

const OrderStatusDropDown = () => {
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
      <h1 className="text-lg">Select Order Status</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 space-y-1">
        <button
          className={`border-gray-500 border p-1 px-5 rounded-full ${
            selectedOptions.includes("On Hold") ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleOptionClick("On Hold")}
        >
          On Hold
        </button>
        <button
          className={`border-gray-500 border p-1 px-5 rounded-full ${
            selectedOptions.includes("Processing")
              ? "bg-blue-500 text-white"
              : ""
          }`}
          onClick={() => handleOptionClick("Processing")}
        >
          Processing
        </button>
        <button
          className={`border-gray-500 border p-1 px-5 rounded-full ${
            selectedOptions.includes("Rejected") ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleOptionClick("Rejected")}
        >
          Rejected
        </button>
        <button
          className={`border-gray-500 border p-1 px-5 rounded-full ${
            selectedOptions.includes("Completed")
              ? "bg-blue-500 text-white"
              : ""
          }`}
          onClick={() => handleOptionClick("Completed")}
        >
          Completed
        </button>
        <button
          className={`border-gray-500 border p-1 px-5 rounded-full ${
            selectedOptions.includes("In Transit")
              ? "bg-blue-500 text-white"
              : ""
          }`}
          onClick={() => handleOptionClick("In Transit")}
        >
          In Transit
        </button>
      </div>

      <div className="flex flex-col space-y-6 ">
        <span className="text-sm text-gray-500 text-left mt-3">
          *You can choose multiple Order Status
        </span>
        <div className="flex justify-center">
          {" "}
          <button className="bg-blue-1 text-white p-2 px-6 rounded-xl text-sm w-fit text-center">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusDropDown;
