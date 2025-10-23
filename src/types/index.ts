export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface Product {
  _id: string;
  name: string;
  brand: string;
  description?: string;
  aboutItem: string[];
  price: number;
  category: {
    _id: string;
    name: string;
  };
  stock: number;
  deliveryDate: string;
  discount: number;
  saleRate: number;
  images: string[];
  banner?: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface category {
  _id: string;
  name: string;
  image: string;
  desscription: string;
  createdAt: string;
}

export interface ProductsFilterParams {
  category?: string;
  brand?: string;
  searchTerm?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
}

export interface ProductsFilterApiResponse {
  success: boolean;
  data: Product[];
  total: number;
  page: number;
  pages: number;
}

// Cart types
export interface CartItemProduct {
  _id: string;
  name: string;
  price: number;
  images?: string[];
}

export interface CartItem {
  product: CartItemProduct;
  quantity: number;
  price: number;
  _id: string;
}

export interface Cart {
  _id: string;
  user: string;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  taxAmount: number;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

// Order types
export interface OrderItem {
  product: {
    _id: string;
    name: string;
    price: number;
    images?: string[];
  };
  quantity: number;
  price: number;
  _id: string;
}

export interface Order {
  _id: string;
  user: {
    _id: string;
    email: string;
  };
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: string;
  status: string;
  shippingAddress: ShippingAddress;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  zipCode: string;
  phoneNumber: string;
}
