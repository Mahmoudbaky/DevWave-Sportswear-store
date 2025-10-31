import axios from "axios";
import { baseUrl } from "@/lib/constants";
import type { ApiResponse, Cart } from "@/types";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

function authHeader(token: string) {
  return { Authorization: `Bearer ${token}` };
}

const cartService = {
  getCart: async (token: string) => {
    const res = await api.get<ApiResponse<Cart>>("/api/cart/get-cart", {
      headers: authHeader(token),
    });

    // console.log("Fetched cart:", res);
    return res.data;
  },
  addToCart: async (
    token: string,
    body: { productId: string; quantity: number }
  ) => {
    const res = await api.post<ApiResponse<Cart>>(
      "/api/cart/add-to-cart",
      body,
      { headers: authHeader(token) }
    );
    return res.data;
  },
  updateCart: async (
    token: string,
    body: { productId: string; quantity: number }
  ) => {
    const res = await api.put<ApiResponse<Cart>>(
      "/api/cart/update-cart",
      body,
      { headers: authHeader(token) }
    );
    return res.data;
  },
  removeFromCart: async (token: string, productId: string) => {
    const res = await api.delete<ApiResponse<Cart>>(
      `/api/cart/remove-from-cart/${productId}`,
      { headers: authHeader(token) }
    );
    return res.data;
  },
  clearCart: async (token: string) => {
    const res = await api.delete<ApiResponse<Cart>>("/api/cart/clear-cart", {
      headers: authHeader(token),
    });
    return res.data;
  },
};

export default cartService;
