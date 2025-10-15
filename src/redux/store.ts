import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Export types for TypeScript
// RootState: Type of the entire Redux state tree
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch: Type of the dispatch function (needed for async thunks)
export type AppDispatch = typeof store.dispatch;

export default store;
