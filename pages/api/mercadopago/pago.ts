import { api, mercadopago } from "@/app/api";
import { Payment } from "mercadopago";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Log para depuración del webhook

    // Obtenemos el cuerpo de la petición que incluye información sobre la notificación
    const body: { data: { id: string } } = req.body;

    console.log(req.body);

    // Obtenemos el pago
    const payment = await new Payment(mercadopago).get({ id: body.data.id });

    // Si se aprueba, agregamos el mensaje
    if (payment.status === "approved") {
      await api.message.add(body.data.id);
      
    }

    // Respondemos con un estado 200 para indicarle que la notificación fue recibida
    // Respondemos con un estado 200 para indicarle que la notificación fue recibida
    return res.status(200).end();
  }
  return res.status(405).json({ message: "Method not allowed" });
}
