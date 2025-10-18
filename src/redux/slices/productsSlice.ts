import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "@/services/productsServices";
import type { Product, ProductsFilterParams } from "@/types";

interface ProductsState {
  filteredProducts: Product[];
  filterParamsValues: ProductsFilterParams;
  loading: boolean;
  error: string | null;
}

export const getFilteredProducts = createAsyncThunk(
  "products/filter",
  async (filterValues: ProductsFilterParams, { rejectWithValue }) => {
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
  filterParamsValues: {
    brand: "",
    category: "",
    searchTerm: "",
    minPrice: undefined,
    maxPrice: undefined,
    page: 1,
    limit: 10,
  },
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
    updateSearchTerm: (state: ProductsState, action: { payload: string }) => {
      state.filterParamsValues.searchTerm = action.payload;
    },
    updateCategory: (state: ProductsState, action: { payload: string }) => {
      state.filterParamsValues.category = action.payload;
    },
    updateBrand: (state: ProductsState, action: { payload: string }) => {
      state.filterParamsValues.brand = action.payload;
    },
    updateMinPrice: (
      state: ProductsState,
      action: { payload: number | undefined }
    ) => {
      state.filterParamsValues.minPrice = action.payload;
    },
    updateMaxPrice: (
      state: ProductsState,
      action: { payload: number | undefined }
    ) => {
      state.filterParamsValues.maxPrice = action.payload;
    },
    clearFilters: (state: ProductsState) => {
      state.filterParamsValues = {
        brand: "",
        category: "",
        searchTerm: "",
        minPrice: undefined,
        maxPrice: undefined,
        page: 1,
        limit: 10,
      };
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

export const {
  clearError,
  updateSearchTerm,
  updateCategory,
  updateBrand,
  updateMinPrice,
  updateMaxPrice,
  clearFilters,
} = filteredProductsSlice.actions;
export default filteredProductsSlice.reducer;
