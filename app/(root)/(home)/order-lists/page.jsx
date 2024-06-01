import OrderListMenu from "@/components/OrderListMenu";
import OrderListTable from "@/components/OrderListTable";
import React from "react";

const OrderLists = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold text-white">Order Lists</h1>

      <OrderListMenu />
      <OrderListTable />
    </section>
  );
};

export default OrderLists;
