"use client";
import { useProduct } from "@/store/ProductStore";
import { CATEGORIAS, Product } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function ProductCard(props: Product) {
  const productStore = useProduct();
  const router = useRouter();
  return (
    <div
      onClick={() => {
        productStore.setCurrentProduct(props);
        router.push(`/detalle/${props.id}`);
      }}
      className="w-full h-full flex flex-col rounded-lg overflow-hidden shadow"
    >
      <Image
        src={
          props.images.length && props.images[0] !== ""
            ? props.images[0]
            : "https://i.imgur.com/QkIa5tT.jpeg"
        }
        alt={props.name}
        className="w-full"
        placeholder="blur"
        blurDataURL="https://i.imgur.com/QkIa5tT.jpeg"
        width={250}
        height={300}
      />
      <section className="flex flex-col p-4 gap-2">
        <span className="text-stone-500">{props.brand}</span>
        <h3 className="text-stone-800 font-semibold">{props.name}</h3>
        <span className="text-stone-800 text-sm">{props.brand}</span>
        <span className="text-stone-600">S/ {props.price}</span>
      </section>
    </div>
  );
}

export default ProductCard;
