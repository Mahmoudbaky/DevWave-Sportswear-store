import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import cartService from "@/services/CartServices";
import type { Cart } from "@/types";

interface CartState {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  cart: null,
  loading: false,
  error: null,
};

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ token }: { token: string }, { rejectWithValue }) => {
    try {
      const res = await cartService.getCart(token);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch cart"
      );
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (
    {
      token,
      productId,
      quantity,
    }: { token: string; productId: string; quantity: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await cartService.addToCart(token, { productId, quantity });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to add to cart"
      );
    }
  }
);

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async (
    {
      token,
      productId,
      quantity,
    }: { token: string; productId: string; quantity: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await cartService.updateCart(token, { productId, quantity });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to update cart item"
      );
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (
    { token, productId }: { token: string; productId: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await cartService.removeFromCart(token, productId);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to remove from cart"
      );
    }
  }
);

export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async ({ token }: { token: string }, { rejectWithValue }) => {
    try {
      const res = await cartService.clearCart(token);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to clear cart"
      );
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<Cart | null>) {
      state.cart = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    const setPending = (state: CartState) => {
      state.loading = true;
      state.error = null;
    };
    const setRejected = (state: CartState, action: any) => {
      state.loading = false;
      state.error = action.payload as string;
    };

    builder
      .addCase(fetchCart.pending, setPending)
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, setRejected)
      .addCase(addToCart.pending, setPending)
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(addToCart.rejected, setRejected)

      .addCase(updateCart.pending, setPending)
      .addCase(updateCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(updateCart.rejected, setRejected)

      .addCase(removeFromCart.pending, setPending)
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(removeFromCart.rejected, setRejected)

      .addCase(clearCart.pending, setPending)
      .addCase(clearCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(clearCart.rejected, setRejected);
  },
});

export const { setCart, clearError } = cartSlice.actions;
export default cartSlice.reducer;
