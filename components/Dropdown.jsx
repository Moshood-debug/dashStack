"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("January"); // State for selected month
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const month = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Handle click events outside the dropdown when it's open
    document.addEventListener("click", handleClickOutside, true);

    // Cleanup function to remove event listener on unmount
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [isOpen]);

  const handleOptionClick = (value) => {
    setSelectedMonth(value);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="bg-dark-3 text-white font-semibold py-2 px-4 rounded-lg inline-flex items-center"
        onClick={toggleDropdown}
      >
        <span>{selectedMonth}</span>

        <ChevronDown size={23} />
      </button>

      {isOpen && (
        <div
          className={`absolute z-50 right-0 mt-2 w-56 rounded-lg shadow-lg bg-dark-2  ring-1 ring-black ring-opacity-5 ${
            window.innerHeight < document.documentElement.scrollHeight
              ? "top-auto bottom-0"
              : "top-auto bottom-0"
          }`}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {month.map((item) => (
              <button
                key={item.value}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-3 hover:text-gray-300 w-full text-left"
                role="menuitem"
                onClick={() => handleOptionClick(item.value)} // Pass item.value directly
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
