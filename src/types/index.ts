export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  banner: string;
}

export interface category {
  id: number;
  name: string;
  image: string;
  desscription: string;
  createdAt: string;
}
