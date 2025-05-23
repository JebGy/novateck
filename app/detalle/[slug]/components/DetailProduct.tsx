"use client";
import { saveCart } from "@/services/cartService";
import { getProductById } from "@/services/productService";
import { useProduct } from "@/store/ProductStore";
import { useUser } from "@clerk/nextjs";
import { Box, Car, Truck } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function DetailProduct() {
  const { currentProduct, setCurrentProduct } = useProduct();
  const [current, setCurrent] = useState(1);
  const path = usePathname();
  const usuario = useUser();
  console.log();

  useEffect(() => {
    if (currentProduct.id === "" && path !== "") {
      getProductById(path!.split("/")[2]).then((v) =>
        v ? setCurrentProduct(v) : null
      );
    }
  }, [currentProduct.id]);

  if (currentProduct.id !== "") {
    return (
      <div className="col-span-4 p-4 h-fit w-full shadow">
        <section className="flex flex-row items-center justify-between">
          <span className="font-semibold">{currentProduct.brand}</span>
          <span className="text-sm">
            Código: {currentProduct.id.split("-")[1]}
          </span>
        </section>
        <h1 className="text-2xl font-thin mb-2">{currentProduct.name}</h1>
        <section className="grid grid-cols-1 gap-4 mt-2 border-t-2 pt-8">
          <div className="flex flex-col gap-2">
            <p className="font-thin text-sm">{currentProduct.description}</p>
            <p className=" text-sm">
              Vendido por{" "}
              <span className="font-semibold underline">
                {currentProduct.brand}
              </span>
            </p>
            <section className="grid grid-cols-2 border-amber-400 border rounded-lg p-4">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full border border-amber-400 bg-amber-100 w-10 h-10 flex flex-col items-center justify-center text-center">
                  <Truck />
                </div>
                <span className="underline text-sm underline-offset-2">
                  Despacho a domicilio
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full border border-amber-400 bg-amber-100 w-10 h-10 flex flex-col items-center justify-center text-center">
                  <Box />
                </div>
                <span className="underline text-sm underline-offset-2">
                  Disponible para retiro
                </span>
              </div>
            </section>
          </div>
          <div className="flex flex-col  gap-2">
            <div className="flex flex-row items-center justify-between">
              <span className="text-3xl font-semibold">
                S/ {currentProduct.price}
              </span>
              <div className="flex flex-row items-center gap-2 my-4">
                <Car />
                <p>Compras a nivel nacional</p>
              </div>
            </div>
            <section className="flex flex-col gap-4 items-center justify-center">
              <div className="flex flex-row gap-4">
                <button
                  className="bg-stone-100 border w-8 h-8 rounded-lg active:scale-90 transition-transform disabled:bg-white"
                  disabled={current === 1}
                  onClick={() => {
                    if (current > 1) {
                      setCurrent(current - 1);
                    }
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  disabled
                  value={current}
                  min={1}
                  max={4}
                  className="w-10 text-center border"
                />
                <button
                  className="bg-stone-100 border w-8 h-8 rounded-lg active:scale-90 transition-transform disabled:bg-white"
                  disabled={current === 4}
                  onClick={() => {
                    if (current < 4) {
                      setCurrent(current + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
              <span className="text-sm font-light">Máximo 4 unidades.</span>
            </section>
            <button
              onClick={() => {
                saveCart(usuario.user?.id!, {
                  userId: usuario.user?.id!,
                  items: [
                    {
                      product: currentProduct,
                      quantity: current,
                      selectedColor: currentProduct.colors[0],
                    },
                  ],
                  total: current * currentProduct.price,
                });
              }}
              className="bg-blue-800 rounded-full text-lg text-white p-4"
            >
              Agregar al carrito
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default DetailProduct;
