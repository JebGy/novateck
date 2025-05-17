import { collection, addDoc, setDoc, getDocs, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Order } from "@/types";
import { doc, updateDoc } from "firebase/firestore";
import { query, where } from "firebase/firestore";

export const createOrder = async (order: Order, id: string) => {
  const orderRef = doc(db, "orders", id);
  await setDoc(orderRef, order);
};
export async function getAllOrders() {
  const querySnapshot = await getDocs(collection(db, "orders"));
  const orders: Order[] = [];
  querySnapshot.forEach((doc) => {
    orders.push({ orderId: doc.id, ...doc.data() } as Order);
  });
  return orders;
}

export const getOrderById = async (id: string) => {
  const ordersRef = collection(db, "orders");
  const q = query(ordersRef, where("userId", "==", id));
  const querySnapshot = await getDocs(q);
  const orders: Order[] = [];
  querySnapshot.forEach((doc) => {
    orders.push({ orderId: doc.id, ...doc.data() } as Order);
  });
  return orders;
};
