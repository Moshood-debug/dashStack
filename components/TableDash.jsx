import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tableData } from "@/constants";
import React from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";

const TableDash = () => {
  return (
    <section>
      <div className="bg-dark-1 p-9 space-y-9 rounded-xl">
        <div className="flex-between">
          <div className="text-white text-2xl font-bold">Deal Details</div>
          <div className="">
            <Dropdown />
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Table className="">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader className="bg-dark-3 text-white">
              <TableRow>
                <TableHead className=" text-left text-white">
                  Product Name
                </TableHead>
                <TableHead className="text-white font-bold">Location</TableHead>
                <TableHead className="text-white font-bold">
                  Date - Time
                </TableHead>
                <TableHead className="text-white font-bold">Piece</TableHead>
                <TableHead className="text-white font-bold">Amount</TableHead>
                <TableHead className="text-center text-white">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium flex gap-3">
                      {" "}
                      {/* <Image
                      className="rounded-full"
                      src={item.icon}
                      width={40}
                      height={40}
                      alt="..."
                    /> */}
                      {item.productName}
                    </TableCell>
                    <TableCell className="">{item.location}</TableCell>
                    <TableCell className="">{item.dateTime}</TableCell>
                    <TableCell className="">{item.piece}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell className="text-center">
                      {item.status ? (
                        <button className="rounded-full bg-green-1 p-4 py-1">
                          Delivered
                        </button>
                      ) : (
                        <button className="rounded-full bg-red-500 p-4 py-1">
                          Not Delivered
                        </button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default TableDash;
