import { collection, addDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Order } from "@/types";
import { doc, updateDoc } from "firebase/firestore";

export const createOrder = async (order: Order, id: string) => {
  const orderRef = doc(db, "orders", id);
  await setDoc(orderRef, order);
};
export const updateOrderPaymentStatus = async (
  orderId: string,
  paymentStatus: string
) => {
  const orderDocRef = doc(db, "orders", orderId);
  await updateDoc(orderDocRef, { paymentStatus });
};
