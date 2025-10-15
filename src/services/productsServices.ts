import axios from "axios";
import { baseUrl } from "@/lib/constants";
import { type ApiResponse, type Product } from "@/types";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const productsService = {
  getProducts: async () => {
    return await api.get("/api/products");
  },
  getProduct: async (id: string): Promise<ApiResponse<Product>> => {
    const response = await api.get<ApiResponse<Product>>(`/api/products/${id}`);
    return response.data;
  },
  createProduct: async (data: any) => {
    return await api.post("/api/products", data);
  },
  updateProduct: async (id: string, data: any) => {
    return await api.put(`/api/products/${id}`, data);
  },
  deleteProduct: async (id: string) => {
    return await api.delete(`/api/products/${id}`);
  },
  getNewProducts: async (): Promise<ApiResponse<Product[]>> => {
    const response = await api.get<ApiResponse<Product[]>>(
      "/api/products/new-products"
    );
    return response.data;
  },
};

export default productsService;
