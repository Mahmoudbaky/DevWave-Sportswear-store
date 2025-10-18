import axios from "axios";
import { baseUrl } from "@/lib/constants";
import type { ApiResponse, Order } from "@/types";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

function authHeader(token: string) {
  return { Authorization: `Bearer ${token}` };
}

export interface CreateOrderRequest {
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    zipCode: string;
    phoneNumber: string;
  };
  paymentMethod: string;
}

const orderService = {
  createOrder: async (token: string, orderData: CreateOrderRequest) => {
    const res = await api.post<ApiResponse<Order>>(
      "/api/orders/create",
      orderData,
      { headers: authHeader(token) }
    );
    return res.data;
  },
};

export default orderService;
