import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import ProductFilterPage from "./pages/ProductFilterPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/products" element={<ProductFilterPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
