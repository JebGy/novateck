import React from "react";
import { Product } from "@/types";

interface ProductListAdminProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

function ProductListAdmin({ products, onEdit, onDelete }: ProductListAdminProps) {
  return (
    <div className="bg-white rounded row-span-1 col-span-6 h-full p-4">
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
            <tr key={product.id} className="border-b transition-colors duration-200 hover:bg-stone-100">
              <td className="py-3 px-8 ">{product.name}</td>
              <td className="py-3 px-4">{product.brand}</td>
              <td className="py-3 px-4">{product.category}</td>
              <td className="py-3 px-4 font-semibold">S/ {product.price}</td>
              <td className="py-3 px-4">{product.stock}</td>
              <td className="py-3 px-4 flex flex-col items-center gap-3">
                <button 
                  className="px-3 w-full py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  onClick={() => onEdit(product)}
                >
                  Editar
                </button>
                <button 
                  className="px-3 w-full py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  onClick={() => onDelete(product.id)}
                >
                  Eliminar
                </button>
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
