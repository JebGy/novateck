"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useProduct } from "@/store/ProductStore";
import Image from "next/image";
import React from "react";

function CarouselProduct() {
  const { currentProduct } = useProduct();
  return (
    <div className="z-10 col-span-4 p-4 w-full flex flex-row items-center justify-center">
      <Carousel className=" w-full max-w-2xl lg:w-full mx-auto">
        <CarouselContent>
          {currentProduct &&
            currentProduct.images.map((v, i) => (
              <CarouselItem key={v + i}>
                <Image
                  className="w-full"
                  src={v || "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
                  width={800}
                  height={800}
                  alt={currentProduct.name}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarouselProduct;
