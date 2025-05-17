"use server";

import { redirect } from "next/navigation";
import { api } from "./api";
import { Cart } from "@/types";
import { createOrder } from "@/services/orderService";

export async function add(cart: Cart) {
  "use server";
  const response = await api.message.submit(cart);
  const { url, id, orderData } = JSON.parse(response);

  await createOrder(orderData,id);
  redirect(url);
}
