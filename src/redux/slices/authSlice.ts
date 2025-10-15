import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "@/services/authServices";

interface User {
  _id: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  // OTP flow state
  otpSent: boolean;
  pendingEmail: string | null;
  otpExpiresAt: string | null;
}

// Step 1: Request OTP - Send email to get OTP
// createAsyncThunk handles async operations and automatically dispatches pending/fulfilled/rejected actions
export const requestOtp = createAsyncThunk(
  "auth/requestOtp", // Action type prefix
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await authService.login({ email });
      // Return the data that will be available in action.payload
      return response.data;
    } catch (error: any) {
      // rejectWithValue allows us to return custom error data
      return rejectWithValue(
        error.response?.data?.message || "Failed to send OTP"
      );
    }
  }
);

// Step 2: Verify OTP - Validate OTP and complete login
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (
    { email, otp }: { email: string; otp: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await authService.verifyOtp({ email, otp });
      // Store token in localStorage for persistence
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Invalid OTP");
    }
  }
);

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") || "{}"),
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
  otpSent: false,
  pendingEmail: null,
  otpExpiresAt: null,
};

// Slice combines reducers and actions in one place
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Regular synchronous actions
    logout: (state: AuthState) => {
      state.user = null;
      state.token = null;
      state.otpSent = false;
      state.pendingEmail = null;
      state.otpExpiresAt = null;
      localStorage.removeItem("token");
    },
    // Clear errors manually if needed
    clearError: (state: AuthState) => {
      state.error = null;
    },
    // Reset OTP state (useful for "back" button)
    resetOtpState: (state: AuthState) => {
      state.otpSent = false;
      state.pendingEmail = null;
      state.otpExpiresAt = null;
      state.error = null;
    },
  },
  // extraReducers handle actions from createAsyncThunk
  extraReducers: (builder) => {
    builder
      // Handle requestOtp lifecycle
      .addCase(requestOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otpSent = true;
        state.pendingEmail = action.payload.data.email;
        state.otpExpiresAt = action.payload.data.expiresAt;
      })
      .addCase(requestOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handle verifyOtp lifecycle
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.otpSent = false;
        state.pendingEmail = null;
        state.otpExpiresAt = null;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearError, resetOtpState } = authSlice.actions;
export default authSlice.reducer;
