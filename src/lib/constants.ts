export const baseUrl =
  import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

export const PRODUCTS_PER_PAGE = 10;

export const productDefaultValues = {
  name: "",
  brand: "",
  description: "",
  price: 0,
  category: "",
  stock: 0,
  images: [],
  banner: "",
  discount: 0,
  isActive: false,
};
