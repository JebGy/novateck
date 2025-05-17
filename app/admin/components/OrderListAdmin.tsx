"use client";
import React, { useState } from "react";
import { Order } from "@/types";

interface OrderListAdminProps {
  orders: Order[];
  onStatusChange: (orderId: string, newStatus: Order["deliveryStatus"]) => void;
}

function OrderListAdmin({ orders, onStatusChange }: OrderListAdminProps) {
  const [currentOrder, setCurrentOrder] = useState<Order>();
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div className="bg-white rounded row-span-1 col-span-6 h-full p-4 relative">
      <dialog
        className="fixed top-1/8 mx-auto z-50 my-auto rounded-lg p-4 shadow-lg"
        open={openDialog}
      >
        <h2 className="text-lg font-bold mb-2 flex flex-row items-center justify-between">
          Productos de: <span>{currentOrder?.orderId}</span>
        </h2>
        <ul className="flex flex-col gap-2 border-t-2 pt-4 h-96">
          {currentOrder?.items.map((item, idx) => (
            <li key={idx}>
              📦 {item.product.name} 👉 {item.quantity} unidades
            </li>
          ))}
        </ul>
        <button onClick={()=>{setOpenDialog(false)}} className="px-3 w-full py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
          Cerrar
        </button>
      </dialog>
      <h2 className="text-lg font-bold mb-2">Gestión de pedidos</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">N° Orden</th>
            <th className="py-2">Usuario</th>
            <th className="py-2 px-8">Productos</th>
            <th className="py-2">Total</th>
            <th className="py-2">Estado</th>
            <th className="py-2">Acción</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId} className="border-b hover:bg-stone-50">
              <td className="py-2 font-semibold">{order.orderId}</td>
              <td className="py-2">{order.userId}</td>
              <td className="py-2 grid">
                <button
                  className="px-3 w-fit mx-auto py-1 bg-yellow-400 text-yellow-950 rounded hover:bg-yellow-500 transition-colors"
                  onClick={() => {
                    setCurrentOrder(order);
                    setOpenDialog(true);
                  }}
                >
                  Detalle
                </button>
              </td>
              <td className="py-2">S/ {order.totalAmount.toFixed(2)}</td>
              <td className="py-2">
                <select
                  value={order.deliveryStatus}
                  onChange={(e) =>
                    onStatusChange(
                      order.orderId,
                      e.target.value as Order["deliveryStatus"]
                    )
                  }
                  className="border rounded p-1"
                >
                  <option value="EN_PROCESO">En proceso</option>
                  <option value="ENVIADO">Enviado</option>
                  <option value="ENTREGADO">Entregado</option>
                  <option value="CANCELADO">Cancelado</option>
                </select>
              </td>
              <td className="py-2">
                <button
                  className="px-3 w-full py-1 bg-blue-800 text-white rounded hover:bg-blue-900 transition-colors"
                  onClick={() =>
                    onStatusChange(order.orderId, order.deliveryStatus)
                  }
                >
                  Actualizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {orders.length === 0 && (
        <p className="text-center text-stone-500 py-8">
          No hay pedidos registrados.
        </p>
      )}
    </div>
  );
}

export default OrderListAdmin;
