import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import MercadoPagoConfig, { Payment, Preference } from "mercadopago";
import { revalidatePath } from "next/cache";

export const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export const api = {
  message: {
    async submit(text: string): Promise<string> {
      // Creamos la preferencia incluyendo el precio, titulo y metadata. La información de `items` es standard de Mercado Pago. La información que nosotros necesitamos para nuestra DB debería vivir en `metadata`.
      const preference = await new Preference(mercadopago!).create({
        body: {
          items: [
            {
              id: "message",
              unit_price: 100,
              quantity: 1,
              title: "Mensaje de muro",
            },
          ],
          back_urls: {
            success: "http://localhost:3000/pay/success",
            failure: "http://localhost:3000/pay/failure",
            pending: "http://localhost:3000/pay/pending"
          },
          metadata: {
            text,
          },
        },
      });

      // Devolvemos el init point (url de pago) para que el usuario pueda pagar
      return preference.init_point!;
    },
    async add(id: string): Promise<void> {
      try {
        const payment = await new Payment(mercadopago).get({ id });

        if (payment.status === "approved") {
          const paymentDoc = await getDoc(doc(db, "Pagos", id));

          if (!paymentDoc.exists()) {
            // If the payment doesn't exist in Firestore, add it
            await setDoc(doc(db, "pagos", id), {
              createdAt: new Date(),
            });
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
