//OrderTable

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { orderTableData } from "@/constants";

const OrderListTable = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="bg-dark-5 text-white  ">
          <TableRow className="border-b-dark-3">
            <TableHead className="font-extrabold text-left text-white">
              ID
            </TableHead>
            <TableHead className="font-extrabold text-white">NAME</TableHead>
            <TableHead className="font-extrabold text-white">ADDRESS</TableHead>
            <TableHead className="font-extrabold text-white">DATE</TableHead>
            <TableHead className="font-extrabold text-white">TYPE</TableHead>
            <TableHead className="font-extrabold text-center text-white">
              STATUS
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderTableData.map((item, index) => (
            <TableRow key={index} className="bg-dark-1 border-b-0">
              <TableCell className="font-medium ">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell className="text-center flex justify-center">
                {item.status === "Completed" ? (
                  <div className="bg-green-500 p-1 px-3 rounded-lg text-center w-fit">
                    {item.status}
                  </div>
                ) : item.status === "Processing" ? (
                  <div className="bg-purple-700 p-1 px-3 rounded-lg text-center w-fit">
                    {item.status}
                  </div>
                ) : item.status === "Rejected" ? (
                  <div className="bg-red-500 p-1 px-3 rounded-lg text-center w-fit">
                    {item.status}
                  </div>
                ) : item.status === "In Hold" ? (
                  <div className="bg-orange-400 p-1 px-3 rounded-lg text-center w-fit">
                    {item.status}
                  </div>
                ) : item.status === "In Transit" ? (
                  <div className="bg-pink-1 p-1 px-3 rounded-lg text-center w-fit">
                    {item.status}
                  </div>
                ) : (
                  <div>{item.status}</div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderListTable;
