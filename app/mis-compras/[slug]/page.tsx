import { Order } from "@/types";

// Dummy orders for UI demo
const orders: Order[] = [
  {
    orderId: "ORD-001",
    userId: "1",
    items: [
      {
        product: {
          id: "1001",
          name: "Samsung Galaxy S23 Ultra",
          brand: "Samsung",
          category: "CELULARES" as any, // UI only
          price: 4999.99,
          images: ["https://i.imgur.com/QkIa5tT.jpeg"],
          stock: 10,
          colors: ["Negro", "Plata"],
          description: "El mejor smartphone de Samsung.",
          comments: [],
          ratings: [],
        },
        quantity: 1,
        selectedColor: "Negro",
      },
    ],
    totalAmount: 4999.99,
    payment: {
      method: "YAPE",
      transactionId: "TX123456",
      status: "COMPLETED",
    },
    orderDate: "2024-05-01T10:00:00Z",
    deliveryStatus: "ENTREGADO",
  },
  {
    orderId: "ORD-002",
    userId: "1",
    items: [
      {
        product: {
          id: "1002",
          name: "MacBook Pro 14''",
          brand: "Apple",
          category: "LAPTOPS" as any, // UI only
          price: 8999.99,
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
    totalAmount: 8999.99,
    payment: {
      method: "TARJETA",
      transactionId: "TX654321",
      status: "COMPLETED",
    },
    orderDate: "2024-05-10T15:30:00Z",
    deliveryStatus: "ENVIADO",
  },
];

function MisComprasPage() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Mis compras</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">N° Orden</th>
              <th className="py-2">Fecha</th>
              <th className="py-2">Productos</th>
              <th className="py-2">Total</th>
              <th className="py-2">Pago</th>
              <th className="py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId} className="border-b hover:bg-stone-50">
                <td className="py-2 font-semibold">{order.orderId}</td>
                <td className="py-2">{new Date(order.orderDate).toLocaleDateString()}</td>
                <td className="py-2">
                  <ul className="list-disc pl-4">
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        {item.product.name} <span className="text-xs text-stone-500">x{item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-2">S/ {order.totalAmount.toFixed(2)}</td>
                <td className="py-2">{order.payment.method}</td>
                <td className="py-2">
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-stone-100">
                    {order.deliveryStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {orders.length === 0 && (
          <p className="text-center text-stone-500 py-8">No tienes compras registradas.</p>
        )}
      </div>
    </div>
  );
}

export default MisComprasPage;
