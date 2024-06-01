import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart } from "lucide-react";

import Image from "next/image";

const CardComponent = () => {
  return (
    <Card className=" border-0 shadow-md overflow-hidden ">
      <CardHeader className="bg-dark-3 p-0">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="md:w-fit full-width-image-container">
                {" "}
                <Image
                  className="rounded-tl-xl rounded-tr-xl full-width-image"
                  src="/image/appleImg.jpg"
                  alt="apple"
                  layout="responsive"
                  width={1920} // You can set a placeholder width and height for proper aspect ratio
                  height={1080} // These values will be overridden by the CSS
                />
              </div>
            </CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-dark-3 left-3 text-white" />
          <CarouselNext className="bg-dark-3 right-3 text-white" />
        </Carousel>
      </CardHeader>
      <CardContent className="bg-dark-1 text-white  rounded-b-xl  p-6 relative">
        <span className="absolute top-4 right-4">
          <div className="bg-dark-5 p-3 rounded-2xl">
            <Heart />
          </div>
        </span>
        <div className="space-y-4">
          <p className="text-lg font-semibold">Apple Watch Series 4 </p>
          <CardDescription className="text-blue-1">$120.00</CardDescription>

          <button className="bg-dark-3 p-3 px-8 rounded-xl shadow-xl">
            Edit Product
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
