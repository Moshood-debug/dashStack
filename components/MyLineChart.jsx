import React from "react";
import { Line } from "react-chartjs-2";

const MyLineChart = ({ chartData, chartOptions }) => {
  return <Line data={chartData} options={chartOptions} />;
};

export default MyLineChart;
