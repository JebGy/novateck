"use client";
import { useProduct } from "@/store/ProductStore";
import React from "react";

function DetailProduct() {
  const { currentProduct } = useProduct();
  return <div>
    <span>
      {currentProduct.brand}
    </span>
    <h1>{currentProduct.name}</h1>
    <span>{currentProduct.price}</span>
    <span>{currentProduct.stock}</span>
  </div>;
}

export default DetailProduct;
