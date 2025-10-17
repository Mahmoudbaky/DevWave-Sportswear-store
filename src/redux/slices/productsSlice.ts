import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "@/services/productsServices";
import type { Product, ProductsFilterParams } from "@/types";

interface ProductsState {
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
}

export const getFilteredProducts = createAsyncThunk(
  "products/filter",
  async (filterValues: ProductsFilterParams, { dispatch, rejectWithValue }) => {
    try {
      const response = await productsService.getFilteredProducts(filterValues);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to send OTP"
      );
    }
  }
);

// filteredProducts
const filteredProductsInitialState: ProductsState = {
  filteredProducts: [],
  loading: false,
  error: null,
};

const filteredProductsSlice = createSlice({
  name: "products",
  initialState: filteredProductsInitialState,
  reducers: {
    clearError: (state: ProductsState) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilteredProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFilteredProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredProducts = action.payload;
        state.error = null;
      })
      .addCase(getFilteredProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = filteredProductsSlice.actions;
export default filteredProductsSlice.reducer;
