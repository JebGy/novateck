import React, { useState } from "react";
import { CATEGORIAS, Product } from "@/types";

interface ProductFormProps {
  onSubmit: (product: Product) => void;
}

const initialProduct: Product = {
  id: "",
  name: "",
  brand: "",
  category: CATEGORIAS.CELULARES,
  price: 0,
  images: [],
  stock: 0,
  colors: [],
  description: "",
  comments: [],
  ratings: [],
};

function ProductForm({ onSubmit }: ProductFormProps) {
  const [product, setProduct] = useState<Product>(initialProduct);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof Product) => {
    setProduct((prev) => ({ ...prev, [key]: e.target.value.split(",") }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 col-span-1 row-span-full bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold">Agregar producto</h2>
      <input name="name" value={product.name} onChange={handleChange} placeholder="Nombre" className="w-full border p-2 rounded" required />
      <input name="brand" value={product.brand} onChange={handleChange} placeholder="Marca" className="w-full border p-2 rounded" required />
      <select name="category" value={product.category} onChange={handleChange} className="w-full border p-2 rounded">
        {Object.values(CATEGORIAS).map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Precio" className="w-full border p-2 rounded" required />
      <input name="images" value={product.images.join(",")} onChange={e => handleArrayChange(e, "images") } placeholder="URLs de imágenes (separadas por coma)" className="w-full border p-2 rounded" />
      <input name="stock" type="number" value={product.stock} onChange={handleChange} placeholder="Stock" className="w-full border p-2 rounded" required />
      <input name="colors" value={product.colors.join(",")} onChange={e => handleArrayChange(e, "colors") } placeholder="Colores (separados por coma)" className="w-full border p-2 rounded" />
      <textarea name="description" value={product.description} onChange={handleChange} placeholder="Descripción" className="w-full border p-2 rounded" />
      <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded">Guardar producto</button>
    </form>
  );
}

export default ProductForm;
