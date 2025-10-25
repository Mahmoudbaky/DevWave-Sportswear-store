import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import ProductFilterPage from "./pages/ProductFilterPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import AdminLayout from "./components/admin/AdminLayout";
import OverviewPage from "./pages/admin/OverviewPage";
import ProductsPage from "./pages/admin/ProductsPage";
import ProductFormPage from "./pages/admin/ProductFormPage";
import CategoriesPage from "./pages/admin/CategoriesPage";
import CategoryFormPage from "./pages/admin/CategoryFormPage";
import OrdersPage from "./pages/admin/OrdersPage";
import OrdersDetailsPage from "./pages/OrdersDetailsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./components/Layout";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60, // 1 minute
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin" element={<OverviewPage />} />
            <Route path="/admin/products" element={<ProductsPage />} />
            <Route
              path="/admin/products-form/:id?"
              element={<ProductFormPage />}
            />
            <Route path="/admin/categories" element={<CategoriesPage />} />
            <Route
              path="/admin/category-form/:id?"
              element={<CategoryFormPage />}
            />
            <Route path="/admin/orders" element={<OrdersPage />} />
          </Route>

          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/orders/:id" element={<OrdersDetailsPage />} />
          </Route>
          <Route path="/products/:category?" element={<ProductFilterPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
