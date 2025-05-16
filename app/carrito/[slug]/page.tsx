import React from 'react';
import { Cart, CartItem, Product, CATEGORIAS } from "@/types";
import Image from "next/image";

// Dummy cart data for UI demo
const cart: Cart = {
  userId: "1",
  items: [
    {
      product: {
        id: "1001",
        name: "Samsung Galaxy S23 Ultra",
        brand: "Samsung",
        category: CATEGORIAS.CELULARES,
        price: 4.99,
        images: ["https://i.imgur.com/QkIa5tT.jpeg"],
        stock: 10,
        colors: ["Negro", "Plata"],
        description: "El mejor smartphone de Samsung.",
        comments: [],
        ratings: [],
      },
      quantity: 2,
      selectedColor: "Negro",
    },
    {
      product: {
        id: "1002",
        name: "MacBook Pro 14''",
        brand: "Apple",
        category: CATEGORIAS.LAPTOPS,
        price: 8.99,
        images: ["https://i.imgur.com/QkIa5tT.jpeg"],
        stock: 5,
        colors: ["Gris", "Plata"],
        description: "Potencia y portabilidad.",
        comments: [],
        ratings: [],
      },
      quantity: 1,
      selectedColor: "Gris",
    },
  ],
  total: 0,
};

function CartPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Carrito de compras</h1>
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        {cart.items.length === 0 ? (
          <p className="text-center text-stone-500">Tu carrito está vacío.</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Producto</th>
                <th className="py-2">Color</th>
                <th className="py-2">Cantidad</th>
                <th className="py-2">Precio</th>
                <th className="py-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item.product.id} className="border-b hover:bg-stone-50">
                  <td className="py-2 flex items-center gap-2">
                    <Image
                      src={item.product.images[0] || "https://i.imgur.com/QkIa5tT.jpeg"}
                      alt={item.product.name}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <div>
                      <div className="font-semibold">{item.product.name}</div>
                      <div className="text-xs text-stone-500">{item.product.brand}</div>
                    </div>
                  </td>
                  <td className="py-2">{item.selectedColor}</td>
                  <td className="py-2">{item.quantity}</td>
                  <td className="py-2">S/ {item.product.price.toFixed(2)}</td>
                  <td className="py-2 font-semibold">S/ {(item.product.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="text-lg font-semibold">Total: S/ {cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)}</div>
        <button className="bg-blue-800 text-white rounded-full px-6 py-3 text-lg hover:bg-blue-900 transition">Finalizar compra</button>
      </div>
    </div>
  );
}

export default CartPage;