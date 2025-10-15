import axios from "axios";
import { baseUrl } from "@/lib/constants";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const authService = {
  async register(data: any) {
    return await api.post("/api/auth/register", data);
  },

  async login(data: any) {
    return await api.post("/api/auth/login", data);
  },

  async verifyOtp(data: any) {
    return await api.post("/api/auth/verify-login-otp", data);
  },

  async logout() {
    return await api.post("/api/auth/logout");
  },
};

export default authService;
