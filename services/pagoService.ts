import { db } from "@/lib/firebase";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";

export interface Payment {
  id: string;
  amount: number;
  currency: string;
  method: string;
  status: boolean;
  createdAt: Date;
}

export async function createPayment(
  amount: number,
  currency: string,
  method: string,
  status: true,
  id: string
) {
  const payment: Payment = {
    id,
    amount,
    currency,
    method,
    status,
    createdAt: new Date(),
  };

  await setDoc(doc(db, "pagos", id), payment);
}
