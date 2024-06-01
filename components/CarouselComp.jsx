import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CarouselComp = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div className="CarouselImg flex flex-col items-left  justify-left h-96 w-full bg-blue-1 bg-center bg-cover rounded-xl p-7 px- space-y-3 sm:px-24 md:items-ceneter md:justify-center">
            <div className="text-left flex flex-col items-left justify-center gap-3 w-full xl:w-2/4 md:items-left md:justify-left">
              <p className="text-base font-light leading-8 tracking-wide text-center md:text-left">
                September 12-22
              </p>
              <h1 className="text-4xl font-bold text-center md:text-left">
                Enjoy free home delivery in this summer
              </h1>
              <p className="font-semibold text-white opacity-50 leading-6 tracking-wide text-center md:leading-8 md:text-left">
                Designer Dresses - Pick from trendy Designer Dress.
              </p>
            </div>
            <div className=" flex justify-center md:justify-start">
              {" "}
              {/* Center on mobile */}
              <button className="bg-orange-1 px-6 p-3 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>...ddjdjd</CarouselItem>
        <CarouselItem>...sssss</CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="bg-dark-3 hidden  sm:flex " />
      <CarouselNext className="bg-dark-3 hidden  sm:flex" />
    </Carousel>
  );
};
