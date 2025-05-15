import React from "react";
import CarouselProduct from "./components/CarouselProduct";
import DetailProduct from "./components/DetailProduct";

function page() {
  return (
    <div className="grid grid-cols-2">
      <CarouselProduct />
      <DetailProduct />
    </div>
  );
}

export default page;
