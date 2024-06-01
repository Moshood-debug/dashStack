"use client";
import React, { useState } from "react";
import MyLineChart from "./MyLineChart";
import { UserData } from "@/constants";
import { Chart as ChartJS } from "chart.js/auto";

const Chart = () => {
  const [delayed, setDelayed] = useState(false); // Declare delayed variable

  const userData = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#fff",
        backgroundColor: [
          "rgba(72, 128, 255, 0.2)", // Start color with opacity
          "rgba(72, 128, 255, 0.6)", // End color with opacity
        ],
        borderColor: "rgba(72, 128, 255, 1)", // Border color
        borderWidth: 2, // Border width
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false, // Prevent the chart from maintaining aspect ratio
    radius: 4, // Radius of the point
    hoverRadius: 10, // Radius of the point when hovered
    hitRadius: 30, // Radius of the point when clicked
    responsive: true, // Allow the chart to be responsive

    animation: {
      onComplete: () => {
        setDelayed(true); // Update delayed state
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
      duration: 2000, // Animation duration in milliseconds
      easing: "easeInOutQuart", // Easing function
    },

    plugins: {
      tooltip: {
        backgroundColor: "rgb(27, 36, 49)", // Background color of the tooltip
        titleColor: "#fff", // Color of the title text
        bodyColor: "#fff", // Color of the body text
        titleFont: {
          size: 16, // Font size of the title
          weight: "bold", // Font weight of the title
        },
        bodyFont: {
          size: 14, // Font size of the body
        },
        borderColor: "#323D4E", // Border color of the tooltip
        borderWidth: 1, // Border width of the tooltip
        displayColors: false, // Whether to show color boxes or not
        padding: 10, // Padding of the tooltip content
        position: "nearest", // Position the tooltip at the nearest point
      },
    },
  };

  return (
    <div className="p-3 bg-dark-1 rounded-xl w-full h-[300px] text-white">
      <MyLineChart chartData={userData} chartOptions={chartOptions} />{" "}
    </div>
  );
};

export default Chart;
