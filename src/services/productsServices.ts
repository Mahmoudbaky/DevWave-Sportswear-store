import axios from "axios";
import { baseUrl } from "@/lib/constants";
import type {
  ApiResponse,
  Product,
  ProductsFilterParams,
  ProductsFilterApiResponse,
} from "@/types";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const productsService = {
  getProducts: async () => {
    const response = await api.get<ApiResponse<Product[]>>(
      "/api/products/all",
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    return response.data;
  },
  getProduct: async (id: string): Promise<ApiResponse<Product>> => {
    const response = await api.get<ApiResponse<Product>>(`/api/products/${id}`);
    return response.data;
  },
  createProduct: async (data: any) => {
    console.log("Creating product with data:", data);

    const response = await api.post<ApiResponse<Product>>(
      "/api/products/create-product",
      data,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    console.log(response);

    return response.data;
  },
  updateProduct: async (id: string, data: any) => {
    const response = await api.put<ApiResponse<Product>>(
      `/api/products/update/${id}`,
      data,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    return response.data;
  },
  deleteProduct: async (id: string) => {
    return await api.delete(`/api/products/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  },

  getFilteredProducts: async (
    params: ProductsFilterParams
  ): Promise<ProductsFilterApiResponse> => {
    try {
      const queryString = new URLSearchParams();

      if (params.category) {
        queryString.append("category", params.category);
      }

      if (params.brand) {
        queryString.append("brand", params.brand);
      }

      if (params.searchTerm) {
        queryString.append("searchTerm", params.searchTerm);
      }

      if (params.minPrice) {
        queryString.append("minPrice", params.minPrice.toString());
      }

      if (params.maxPrice) {
        queryString.append("maxPrice", params.maxPrice.toString());
      }

      if (params.page) {
        queryString.append("page", params.page.toString());
      }

      if (params.limit) {
        queryString.append("limit", params.limit.toString());
      }

      console.log(queryString.toString());

      const response = await api.get(
        `/api/products/filter?${queryString.toString()}`
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getNewProducts: async (): Promise<ApiResponse<Product[]>> => {
    const response = await api.get<ApiResponse<Product[]>>(
      "/api/products/new-products"
    );
    return response.data;
  },
  getAllBrands: async (): Promise<ApiResponse<string[]>> => {
    const response = await api.get<ApiResponse<string[]>>(
      "/api/products/brands/get-all-brands"
    );
    return response.data;
  },
};

export default productsService;
