import React from "react";
import { Order } from "@/types";

interface OrderListAdminProps {
  orders: Order[];
  onStatusChange: (orderId: string, newStatus: Order["deliveryStatus"]) => void;
}

function OrderListAdmin({ orders, onStatusChange }: OrderListAdminProps) {
  return (
    <div className="bg-white rounded shadow p-4 mt-6">
      <h2 className="text-lg font-bold mb-2">Gestión de pedidos</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">N° Orden</th>
            <th className="py-2">Usuario</th>
            <th className="py-2">Productos</th>
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
              <td className="py-2">
                <ul className="list-disc pl-4">
                  {order.items.map((item, idx) => (
                    <li key={idx}>{item.product.name} <span className="text-xs text-stone-500">x{item.quantity}</span></li>
                  ))}
                </ul>
              </td>
              <td className="py-2">S/ {order.totalAmount.toFixed(2)}</td>
              <td className="py-2">
                <select
                  value={order.deliveryStatus}
                  onChange={e => onStatusChange(order.orderId, e.target.value as Order["deliveryStatus"])}
                  className="border rounded p-1"
                >
                  <option value="EN_PROCESO">En proceso</option>
                  <option value="ENVIADO">Enviado</option>
                  <option value="ENTREGADO">Entregado</option>
                  <option value="CANCELADO">Cancelado</option>
                </select>
              </td>
              <td className="py-2">
                <button className="text-blue-700 underline" onClick={() => onStatusChange(order.orderId, order.deliveryStatus)}>Actualizar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {orders.length === 0 && <p className="text-center text-stone-500 py-8">No hay pedidos registrados.</p>}
    </div>
  );
}

export default OrderListAdmin;
