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
          id: `${props.id}`,
          images: props.images,
          name: props.title,
          price: props.price,
          stock: 100,
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
