import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { ChevronDown } from "lucide-react";

import Image from "next/image";

import OrderTypeDropDown from "./OrderTypeDropDown";
import OrderStatusDropDown from "./OrderStatusDropDown";
import Reset from "./Reset";

import CalendarPopup from "./CalenderPopup";

const OrderListMenu = () => {
  return (
    <div className="space-y-6">
      <div className="flex bg-dark-4   px-3 h-14 rounded-xl  w-fit">
        <div className=" flex items-center gap-3">
          <div className=" p-2 px-3">
            <Image
              src="/icons/filter.svg"
              width={20}
              height={20}
              alt="filter-icon"
            />
          </div>

          <div className="h-full border-r-2 border-gray-600"></div>

          <div className="p-2 px-3 text-sm">Filter By</div>

          <div className="h-full border-r-2 border-gray-600"></div>

          <div className="p-2 px-3">
            <Popover>
              <PopoverTrigger>
                <div className="flex justify-center items-center space-x-3 ">
                  <span>Date</span>

                  <ChevronDown />
                </div>
              </PopoverTrigger>
              <PopoverContent className="bg-dark-3 p-1 rounded-xl shadow-lg  border-gray-600">
                <div className="">
                  <CalendarPopup />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="h-full border-r-2 border-gray-600"></div>

          <div className="p-2 px-3">
            <Popover>
              <PopoverTrigger>
                <div className="flex justify-center items-center space-x-3 ">
                  <span className="break-keep">Order Type</span>

                  <ChevronDown />
                </div>
              </PopoverTrigger>
              <PopoverContent className="bg-dark-3 p-1 rounded-xl shadow-lg w-fit border-gray-600">
                <div className="">
                  <OrderTypeDropDown />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="h-full border-r-2 border-gray-600"></div>

          <div className="p-2 px-3">
            <Popover>
              <PopoverTrigger>
                <div className="flex justify-center items-center space-x-3 ">
                  <span className="break-keep">Order Status</span>

                  <ChevronDown />
                </div>
              </PopoverTrigger>
              <PopoverContent className="bg-dark-3 p-1 rounded-xl shadow-lg w-fit border-gray-600">
                <div className="">
                  <OrderStatusDropDown />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="h-full border-r-2 border-gray-600"></div>

          <div className="p-2 px-3">
            <Reset />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListMenu;
