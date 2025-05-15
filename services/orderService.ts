import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Order } from "@/types";


export const createOrder = async (order: Order) => {
  const orderRef = collection(db, "orders");
  const docRef = await addDoc(orderRef, order);
  return docRef.id;
};
