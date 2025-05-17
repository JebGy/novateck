import { CATEGORIAS, Product } from "@/types";
import { create } from "zustand";

interface ProductStoreInt {
  setCurrentProduct: (product: Product) => void;
  setProductCache: (products: Product[]) => void;
  currentProduct: Product;
  products: Product[];
}

export const useProduct = create<ProductStoreInt>((set) => ({
  currentProduct: {
    brand: "",
    category: CATEGORIAS.LAPTOPS,
    colors: ["red"],
    id: "",
    images: [""],
    name: "",
    price: 0,
    stock: 0,
    description: "",
  } as Product,
  products: [],
  setCurrentProduct: (product: Product) => set({ currentProduct: product }),
  setProductCache: (product: Product[]) => set({ products: product }),
}));
