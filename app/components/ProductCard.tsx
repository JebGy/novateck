"use client";
import { useProduct } from "@/store/ProductStore";
import { CATEGORIAS, Product } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function ProductCard(props: {
  id: number;
  images: string[];
  title: string;
  price: number;
}) {
  const productStore = useProduct();
  const router = useRouter();
  return (
    <div
      onClick={() => {
        productStore.setCurrentProduct({
          brand: "SAMSUNG",
          category: CATEGORIAS.CELULARES,
          colors: ["red"],
          id: "1000",
          images: props.images,
          name: props.title,
          price: props.price,
          stock: 100,
          description: "Modelo Nuevo de este producto maravilloso",
        } as Product);
        router.push(`/detalle/${props.title}`)
      }}
      className="w-full h-full flex flex-col rounded-lg overflow-hidden shadow"
    >
      <Image
        src={
          props.images.length && props.images[0] !== ""
            ? props.images[0]
            : "https://i.imgur.com/QkIa5tT.jpeg"
        }
        alt={props.title}
        className="w-full"
        placeholder="blur"
        blurDataURL="https://i.imgur.com/QkIa5tT.jpeg"
        width={250}
        height={300}
      />
      <section className="flex flex-col p-4 gap-2">
        <span className="text-stone-500">SAMNSUNG</span>
        <h3 className="text-stone-800 font-semibold">{props.title}</h3>
        <span className="text-stone-800 text-sm">Proveedor</span>
        <span className="text-stone-600">S/ {props.price.toFixed(2)}</span>
      </section>
    </div>
  );
}

export default ProductCard;
