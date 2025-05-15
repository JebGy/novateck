import Image from "next/image";
import React from "react";

function ProductCard(props: {
  id: number;
  images: string[];
  title: string;
  price: number;
}) {
  return (
    <div className="w-full h-full flex flex-col rounded-lg overflow-hidden shadow">
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
