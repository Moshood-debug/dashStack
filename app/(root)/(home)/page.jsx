import Chart from "@/components/Chart";
import DashCard from "@/components/DashCard";
import TableDash from "@/components/TableDash";
import React from "react";

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold ">Dashboard</h1>

      <div className="">
        <DashCard />
      </div>

      <section>
        <Chart />
      </section>

      <TableDash />
    </section>
  );
};
export default Home;
