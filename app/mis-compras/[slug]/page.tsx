"use client";

import { getOrderById } from "@/services/orderService";
import { Order } from "@/types";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

function MisComprasPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const { user } = useUser();
  useEffect(() => {
    getOrderById(user?.id!)
      .then((v) => setOrders(v))
      .catch();
  }, []);
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Mis compras</h1>
      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto w-full">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">N° Orden</th>
              <th className="py-2">Fecha</th>
              <th className="py-2 hidden lg:block ">Productos</th>
              <th className="py-2">Total</th>
              <th className="py-2">Pago</th>
              <th className="py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId} className="border-b hover:bg-stone-50">
                <td className="py-2 font-semibold">{order.orderId}</td>
                <td className="py-2">
                  {new Date(order.orderDate).toLocaleDateString()}
                </td>
                <td className="py-2 hidden lg:block">
                  <ul className="list-disc pl-4">
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        {item.product.name}{" "}
                        <span className="text-xs text-stone-500">
                          x{item.quantity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-2">S/ {order.totalAmount.toFixed(2)}</td>
                <td className="py-2">{order.payment.status}</td>
                <td className="py-2">
                  <span className={
                    `px-2 py-1 rounded-full text-xs font-semibold bg-stone-100`
                  }>
                    {order.deliveryStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/*     {orders.length === 0 && (
          <p className="text-center text-stone-500 py-8">No tienes compras registradas.</p>
        )} */}
      </div>
    </div>
  );
}

export default MisComprasPage;
