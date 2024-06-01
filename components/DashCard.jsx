import { cardData } from "@/constants";
import Image from "next/image";
import React from "react";

const DashCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map((items) => (
        <div
          key={items.title}
          className="relative bg-dark-1 px-3 p-5 rounded-xl shadow-xl w-full "
        >
          <Image
            src={items.icon}
            className="absolute top-3 right-3"
            width={50}
            height={50}
            alt="icon"
          />
          <div className="space-y-3">
            <p className="text-lg font-semibold text-gray-400">{items.title}</p>
            <h4 className="font-bold text-3xl">{items.total}</h4>
          </div>
          <p className="text-base font-normal text-center pt-6">
            <span className="text-green-400">{items.change}</span> Up from
            yesterday
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashCard;
