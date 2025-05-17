"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useProduct } from "@/store/ProductStore";
import { getAllProducts } from "@/services/productService";

function ProductList() {
  const { products, setProductCache } = useProduct();

  function getProducts() {
    getAllProducts()
      .then((data) => {
        setProductCache(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="w-full h-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 place-items-center gap-4 p-4 col-span-10">
      {products.length > 0 &&
        products.map((v) => <ProductCard key={v.id} {...v} />)}
    </div>
  );
}

export default ProductList;
