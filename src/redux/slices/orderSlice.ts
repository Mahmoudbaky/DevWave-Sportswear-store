import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import orderService from "@/services/orderServices";
import type { Order, ShippingAddress } from "@/types";

interface OrderState {
  currentOrder: Order | null;
  loading: boolean;
  error: string | null;
  isCreating: boolean;
}

const initialState: OrderState = {
  currentOrder: null,
  loading: false,
  error: null,
  isCreating: false,
};

export interface CreateOrderData {
  shippingAddress: ShippingAddress;
  paymentMethod: string;
}

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (
    { token, orderData }: { token: string; orderData: CreateOrderData },
    { rejectWithValue }
  ) => {
    try {
      const res = await orderService.createOrder(token, orderData);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to create order"
      );
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearOrder(state) {
      state.currentOrder = null;
      state.error = null;
    },
    clearError(state) {
      state.error = null;
    },
    setOrder(state, action: PayloadAction<Order | null>) {
      state.currentOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isCreating = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isCreating = false;
        state.currentOrder = action.payload;
        state.error = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isCreating = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearOrder, clearError, setOrder } = orderSlice.actions;
export default orderSlice.reducer;
