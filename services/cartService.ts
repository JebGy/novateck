import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Cart } from "@/types";


export const getCart = async (userId: string): Promise<Cart | null> => {
  const cartRef = doc(db, "carts", userId);
  const cartSnap = await getDoc(cartRef);
  return cartSnap.exists() ? cartSnap.data() as Cart : null;
};

export const saveCart = async (userId: string, cart: Cart) => {
  const cartRef = doc(db, "carts", userId);
  await setDoc(cartRef, cart);
};
