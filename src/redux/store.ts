import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

// Export types for TypeScript
// RootState: Type of the entire Redux state tree
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch: Type of the dispatch function (needed for async thunks)
export type AppDispatch = typeof store.dispatch;

export default store;
