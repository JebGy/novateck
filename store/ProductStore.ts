import { CATEGORIAS, Product } from "@/types";
import { create } from "zustand";

interface ProductStoreInt {
  setCurrentProduct: (product: Product) => void;
  currentProduct: Product;
}

export const useProduct = create<ProductStoreInt>((set) => ({
  currentProduct: {
      brand: "",
      category: CATEGORIAS.LAPTOPS,
      colors: ["red"],
      id: "1000",
      images: [""],
      name: "",
      price: 0,
      stock: 0,
      description: ""
  } as Product,
  setCurrentProduct: (product: Product) => set({ currentProduct: product }),
}));
