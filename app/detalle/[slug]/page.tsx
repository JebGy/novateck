"use client";
import React from "react";
import CarouselProduct from "./components/CarouselProduct";
import DetailProduct from "./components/DetailProduct";
import ComentsList from "./components/ComentsList";
// import { hydrateRoot } from "react-dom/client";

function Page() {
  return (
    <div className="grid grid-cols-12 gap-16 p-4">
      <span className="col-span-2"></span>
      <CarouselProduct />
      <DetailProduct />
      <span className="col-span-2"></span>
      <span className="col-span-2"></span>
      <ComentsList />
      <span className="col-span-2"></span>
    </div>
  );
}

export default Page;
