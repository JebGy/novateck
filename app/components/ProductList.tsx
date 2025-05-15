"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState<
    {
      id: number;
      images: string[];
      title: string;
      price:number
    }[]
  >([]);

  function getProducts() {
    fetch("https://api.escuelajs.co/api/v1/categories/2/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
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
