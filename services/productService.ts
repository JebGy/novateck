/**
 * Represents a product in the application.
 *
 * @property id - The unique identifier for the product.
 * @property name - The name of the product.
 * @property description - A brief description of the product.
 * @property price - The price of the product.
 * @property imageUrl - The URL of the product's image.
 * @property [other fields] - Any additional fields relevant to the product.
 */
import { db } from "@/lib/firebase";
import { Comment, Product } from "@/types";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { v4 } from "uuid";

export const getAllProducts = async (): Promise<Product[]> => {
  const snapshot = await getDocs(collection(db, "products"));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
};

export const getProductById = async (id: string): Promise<Product | null> => {
  console.log(id);
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists()
    ? ({ id: docSnap.id, ...docSnap.data() } as Product)
    : null;
};

export const createProduct = async (
  product: Omit<Product, "id">
): Promise<Product> => {
  const uuid = v4();
  const docRef = doc(db, "products", uuid);
  await setDoc(docRef, { id: uuid, ...product });
  return { id: uuid, ...product };
};

export const updateProduct = async (
  id: string,
  product: Partial<Omit<Product, "id">>
): Promise<Product | null> => {
  const docRef = doc(db, "products", id);
  await updateDoc(docRef, product);
  const updatedDoc = await getDoc(docRef);
  return updatedDoc.exists()
    ? ({ id: updatedDoc.id, ...updatedDoc.data() } as Product)
    : null;
};

export const deleteProduct = async (id: string): Promise<void> => {
  const docRef = doc(db, "products", id);
  await deleteDoc(docRef);
};

export const addComments = async (
  productId: string,
  comment: Comment
): Promise<void> => {
  const docRef = doc(db, "products", productId);
  const productSnap = await getDoc(docRef);

  if (!productSnap.exists()) {
    throw new Error("Product not found");
  }

  const productData = productSnap.data();
  const comments = Array.isArray(productData.comments)
    ? productData.comments
    : [];
  const newComment = {
    ...comment,
  };

  await updateDoc(docRef, {
    comments: [...comments, newComment],
  });
};
