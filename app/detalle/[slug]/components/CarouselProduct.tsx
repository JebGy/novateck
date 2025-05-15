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
    <div className="col-span-1 p-4">
      <Carousel className="w-full max-w-2xl mx-auto">
        <CarouselContent>
          {currentProduct.images.map((v, i) => (
            <CarouselItem key={v + i}>
              <Image
              className="w-full"
                src={v}
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
