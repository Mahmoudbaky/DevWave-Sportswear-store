import axios from "axios";
import { baseUrl } from "@/lib/constants";
import { type ApiResponse, type category } from "@/types";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const categoriesService = {
  getCategories: async (): Promise<ApiResponse<category[]>> => {
    const response = await api.get<ApiResponse<category[]>>(
      "/api/categories/all-categories"
    );

    return response.data;
  },
  getCategory: async (id: string): Promise<ApiResponse<category>> => {
    const response = await api.get<ApiResponse<category>>(
      `/api/categories/${id}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    return response.data;
  },
  createCategory: async (data: any) => {
    const response = await api.post<ApiResponse<any>>(
      "/api/categories/create",
      data,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    return response.data;
  },
  updateCategory: async (id: string, data: any) => {
    const response = await api.put<ApiResponse<any>>(
      `/api/categories/update/${id}`,
      data,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    return response.data;
  },
};

export default categoriesService;
