import axios from "axios";
import { baseUrl } from "@/lib/constants";
import type { ApiResponse, User } from "@/types";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const userServices = {
  getUser: async (): Promise<ApiResponse<User>> => {
    try {
      const res = await api.get<ApiResponse<User>>("/api/users/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  },
  async updateUser(data: any) {
    try {
      const res = await api.put("/api/users/profile", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};

export default userServices;
