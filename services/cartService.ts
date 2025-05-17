import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Cart } from "@/types";

export const getCart = async (userId: string): Promise<Cart | null> => {
  const cartRef = doc(db, "carts", userId);
  const cartSnap = await getDoc(cartRef);
  return cartSnap.exists() ? (cartSnap.data() as Cart) : null;
};

export const saveCart = async (userId: string, cart: Cart) => {
  const cartRef = doc(db, "carts", userId);
  const cartSnap = await getDoc(cartRef);

  if (cartSnap.exists()) {
    // Merge existing items with new ones (push)
    const existingCart = cartSnap.data() as Cart;
    const updatedItems = [...(existingCart.items || []), ...(cart.items || [])];
    const total = updatedItems.reduce(
      (sum, item) => sum + item.product.price * (item.quantity || 1),
      0
    );
    await setDoc(cartRef, { ...cart, items: updatedItems, total });
  } else {
    await setDoc(cartRef, cart);
  }
};
