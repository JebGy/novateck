"use client";
import React from "react";
import CarouselProduct from "./components/CarouselProduct";
import DetailProduct from "./components/DetailProduct";
import ComentsList from "./components/ComentsList";
// import { hydrateRoot } from "react-dom/client";

function Page() {
  return (
    <div className="grid lg:grid-cols-12 grid-cols-4 col-span-4 gap-16 p-4">
      <span className="lg:col-span-2 "></span>
      <CarouselProduct />
      <DetailProduct />
      <span className="lg:col-span-2 "></span>
      <span className="lg:col-span-2 "></span>
      <ComentsList />
      <span className="lg:col-span-2 "></span>
    </div>
  );
}

export default Page;
