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
    console.log("Creating order with data:", orderData);

    const res = await api.post<ApiResponse<Order>>(
      "/api/orders/create",
      orderData,
      { headers: authHeader(token) }
    );
    return res.data;
  },

  getOrders: async (token?: string) => {
    // The server responds with data: { orders: Order[], pagination: { ... } }
    const res = await api.get<
      ApiResponse<{ orders: Order[]; pagination?: any }>
    >(
      "/api/orders/admin-get-all-orders",
      token ? { headers: authHeader(token) } : undefined
    );
    return res.data;
  },

  getOrderById: async (id: string, token?: string) => {
    const res = await api.get<ApiResponse<Order>>(
      `/api/orders/user-order/${id}`,
      token ? { headers: authHeader(token) } : undefined
    );
    return res.data;
  },

  getUserOrders: async (token: string, page?: number, limit?: number) => {
    const config: any = {
      headers: authHeader(token),
    };

    // Attach pagination params when provided
    if (page !== undefined || limit !== undefined) {
      config.params = {};
      if (page !== undefined) config.params.page = page;
      if (limit !== undefined) config.params.limit = limit;
    }

    const res = await api.get<
      ApiResponse<{ orders: Order[]; pagination?: any }>
    >("/api/orders/user-orders", config);
    return res.data;
  },
};

export default orderService;
