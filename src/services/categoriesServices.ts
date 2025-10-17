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
};

export default categoriesService;
