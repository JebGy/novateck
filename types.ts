export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'CELULARES' | 'LAPTOPS' | 'TABLETS' | 'COMPUTADORAS' | 'SMARTWATCH';
  price: number;
  imageUrl: string;
  stock: number;
  colors: string[];
  description?: string;
}


export interface User {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
  purchaseHistory: Order[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

export interface Cart {
  userId: string;
  items: CartItem[];
  total: number;
}

export type PaymentMethod = 'YAPE' | 'TARJETA' | 'PLIN';

export interface PaymentInfo {
  method: PaymentMethod;
  transactionId: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
}

export interface Order {
  orderId: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  payment: PaymentInfo;
  orderDate: string; // ISO date string
  deliveryStatus: 'EN_PROCESO' | 'ENVIADO' | 'ENTREGADO' | 'CANCELADO';
}
