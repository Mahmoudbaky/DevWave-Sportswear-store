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
  category: string;
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
  _id: number;
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
