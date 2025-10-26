import axios from "axios";
import { baseUrl } from "@/lib/constants";
import type { ApiResponse, Feedback } from "@/types";

export type CreateReviewPayload = {
  productId: string;
  rating: number;
  comment: string;
};

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const reviewServices = {
  createReview: async (
    data: CreateReviewPayload
  ): Promise<ApiResponse<null>> => {
    const response = await api.post("/api/feedback/create", data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data as ApiResponse<null>;
  },
  getProductFeedback: async (
    productId: string
  ): Promise<ApiResponse<Feedback[]>> => {
    const response = await api.get(
      `/api/feedback/product-feedback/${productId}`
    );
    return response.data as ApiResponse<Feedback[]>;
  },
  // ,
  // getReviews: async (productId: string): Promise<ApiResponse[]> => {
  //     const response = await api.get(`/reviews?productId=${productId}`);
  //     return response.data;
  // },
  // deleteReview: async (reviewId: string): Promise<ApiResponse[]> => {
  //     const response = await api.delete(`/reviews/${reviewId}`);
  //     return response.data;
  // },
};

export default reviewServices;
