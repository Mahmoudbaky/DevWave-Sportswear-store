import CartItemCard from "@/components/cart/CartItemCard";
import OrderSummary from "@/components/cart/OrderSummary";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { fetchCart } from "@/redux/slices/cartSlice";
import { useNavigate } from "react-router";
import { toast } from "sonner";
const CartPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((s: RootState) => s.auth.token);
  const { cart, error } = useSelector((s: RootState) => s.cart);
  console.log("Cart data:", error);

  useEffect(() => {
    // If there's no token at all, ask user to log in and redirect.
    if (!token) {
      toast.info("Please log in to view your cart.");
      navigate("/login");
      return;
    }

    // Normalize error to check common auth-related messages
    if (error) {
      const normalized = String(error).toLowerCase();
      const authErrors = [
        "invalid token",
        "token expired",
        "expired token",
        "unauthorized",
        "not authenticated",
        "authentication failed",
      ];

      const isAuthError = authErrors.some((e) => normalized.includes(e));

      if (isAuthError) {
        // Session probably expired or token invalid — force login
        toast.info("Session expired. Please log in again.");
        navigate("/login");
        return;
      }
    }

    // If we have a token and no auth-related error, fetch the cart
    dispatch(fetchCart({ token }));
  }, [dispatch, token, error, navigate]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
      <div className="flex flex-col min-h-screen">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Shopping Bag
              </h1>

              {/* cart Items */}
              <div className="mb-4">
                {error && <div className="text-red-500">{error}</div>}
              </div>
              <div className="space-y-6">
                {cart?.items?.length ? (
                  cart.items.map((item) => (
                    <CartItemCard key={item._id} item={item} />
                  ))
                ) : (
                  <div className="text-slate-500">Your cart is empty.</div>
                )}
              </div>
            </div>
            <div className="lg:col-span-1">
              <OrderSummary cart={cart} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CartPage;
