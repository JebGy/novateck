import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Order } from "@/types";
import { doc, updateDoc } from "firebase/firestore";


export const createOrder = async (order: Order) => {
  const orderRef = collection(db, "orders");
  const docRef = await addDoc(orderRef, order);
  return docRef.id;
};
export const updateOrderPaymentStatus = async (orderId: string, paymentStatus: string) => {
  const orderDocRef = doc(db, "orders", orderId);
  await updateDoc(orderDocRef, { paymentStatus });
};