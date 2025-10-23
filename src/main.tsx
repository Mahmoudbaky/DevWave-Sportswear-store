import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/sonner";
import "./index.css";
import App from "./App.tsx";
import store from "./redux/store";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <ThemeProvider>
      <App />
      <Toaster />
    </ThemeProvider>
  </Provider>
  // </StrictMode>
);
