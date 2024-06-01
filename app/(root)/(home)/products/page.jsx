import CardComponent from "@/components/CardComponent";
import { CarouselComp } from "@/components/CarouselComp";
import { Car } from "lucide-react";
import React from "react";

const Products = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white space-">
      <h1 className="text-3xl font-bold ">Products</h1>
      <div className="">
        <CarouselComp />

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    </section>
  );
};

export default Products;
