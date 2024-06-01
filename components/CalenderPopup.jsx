"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const CalendarPopup = () => {
  const [selectedDate, setSelectedDate] = useState(undefined); // Or new Date()

  return (
    <div className="mb-5">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="rounded-md border-gray-500 border-0 m-0 overflow-auto bg-dark-3 text-white"
      />
      <div className="text-center space-y-3">
        {" "}
        <span className="text-sm text-gray-500 ">
          *You can choose multiple date
        </span>
        <button className="bg-blue-1 text-white p-2 px-5 rounded-xl text-sm">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default CalendarPopup;
