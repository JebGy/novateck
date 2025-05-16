import React from "react";
import { Product } from "@/types";

interface ProductListAdminProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

function ProductListAdmin({ products, onEdit, onDelete }: ProductListAdminProps) {
  return (
    <div className="bg-white rounded shadow p-4 mt-6">
      <h2 className="text-lg font-bold mb-2">Productos registrados</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Nombre</th>
            <th className="py-2">Marca</th>
            <th className="py-2">Categoría</th>
            <th className="py-2">Precio</th>
            <th className="py-2">Stock</th>
            <th className="py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b hover:bg-stone-50">
              <td className="py-2">{product.name}</td>
              <td className="py-2">{product.brand}</td>
              <td className="py-2">{product.category}</td>
              <td className="py-2">S/ {product.price.toFixed(2)}</td>
              <td className="py-2">{product.stock}</td>
              <td className="py-2 flex gap-2">
                <button className="text-blue-700 underline" onClick={() => onEdit(product)}>Editar</button>
                <button className="text-red-600 underline" onClick={() => onDelete(product.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {products.length === 0 && <p className="text-center text-stone-500 py-8">No hay productos registrados.</p>}
    </div>
  );
}

export default ProductListAdmin;
