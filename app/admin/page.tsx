"use client";
import React, { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductListAdmin from "./components/ProductListAdmin";
import OrderListAdmin from "./components/OrderListAdmin";
import { Product, Order } from "@/types";
import { deleteProduct, getAllProducts } from "@/services/productService";

// Dummy data for UI demo
const initialProducts: Product[] = [];
const initialOrders: Order[] = [];

function AdminPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddProduct = (product: Product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now().toString() }]);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id).then(() => {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    });
  };

  const handleUpdateProduct = (product: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === product.id ? product : p)));
    setEditingProduct(null);
  };

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Failed to fetch products:", error));
  }, []);

  const handleStatusChange = (
    orderId: string,
    newStatus: Order["deliveryStatus"]
  ) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.orderId === orderId ? { ...o, deliveryStatus: newStatus } : o
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Panel de administración</h1>
      <section className="grid grid-cols-2 grid-rows-2">
        {editingProduct ? (
          <ProductForm onSubmit={handleUpdateProduct} />
        ) : (
          <ProductForm onSubmit={handleAddProduct} />
        )}
        <ProductListAdmin
          products={products}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />
        <OrderListAdmin orders={orders} onStatusChange={handleStatusChange} />
      </section>
    </div>
  );
}

export default AdminPage;
