import { db } from "@/lib/firebase";
import { deleteCart } from "@/services/cartService";
import { createOrder } from "@/services/orderService";
import { Cart, Order, Product } from "@/types";
import { doc, getDoc, setDoc } from "firebase/firestore";
import MercadoPagoConfig, { Payment, Preference } from "mercadopago";

export const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export const api = {
  message: {
    async submit(cart: Cart): Promise<string> {
      // Creamos la preferencia incluyendo el precio, titulo y metadata. La información de `items` es standard de Mercado Pago. La información que nosotros necesitamos para nuestra DB debería vivir en `metadata`.
      const preference = await new Preference(mercadopago!).create({
        body: {
          items: cart.items.map((item, idx) => ({
            id: item.product.id?.toString() || idx.toString(),
            title:
              item.product.name + " " + item.product.colors[0] || "Producto",
            unit_price:
              Number.parseInt(item.product.price + "") ||
              Number.parseInt(item.product.price + "") ||
              0,
            quantity: item.quantity || 1,
            currency_id: "PEN",
          })),
          notification_url:
            "https://novateck-seven.vercel.app/api/mercadopago/pago",

          metadata: {
            cart,
          },
        },
      });

      // Devolvemos el init point (url de pago) para que el usuario pueda pagar
      return JSON.stringify({
        url: preference.init_point!,
        id: preference.id!,
        orderData: {
          deliveryStatus: "EN_PROCESO",
          items: cart.items.map((item, idx) => ({
            ...item,
          })),
          orderDate: new Date().toISOString(),
          orderId: preference.id?.toString() || "",
          userId: cart.userId || "", // Add userId from cart or set as empty string
          totalAmount: cart.items.reduce(
            (sum, item) =>
              sum + Number(item.product.price) * (item.quantity || 1),
            0
          ), // Calculate total
          payment: {
            status: "PENDING", // Set default or actual payment status
            transactionId: preference.id!,
          },
        },
      });
    },
    async add(id: string): Promise<void> {
      try {
        const payment = await new Payment(mercadopago).get({ id });

        if (payment.status === "approved") {
          const paymentDoc = await getDoc(doc(db, "pagos", id));

          if (!paymentDoc.exists()) {
            // If the payment doesn't exist in Firestore, add it
            await setDoc(doc(db, "pagos", id), {
              createdAt: new Date(),
            });

            const { cart } = payment.metadata;

            createOrder(
              {
                items: cart.items!, // Filtra items undefined o sin product
                deliveryStatus: "EN_PROCESO",
                totalAmount: payment.transaction_details?.total_paid_amount!,
                userId: cart.user_id,
                orderDate: payment.date_created!,
                orderId: id,
                payment: {
                  status: "COMPLETED",
                  transactionId: id!,
                },
              } as Order,
              id
            );
            deleteCart(cart.user_id);

            console.log(`Payment ${id} successfully added to Firestore`);
          }
        }
      } catch (error) {
        console.error("Error adding payment to Firestore:", error);
        throw error;
      }
    },
  },
};
