import Header from "@/components/Header";
import CartItemCard from "@/components/cart/CartItemCard";
import OrderSummary from "@/components/cart/OrderSummary";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { fetchCart } from "@/redux/slices/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((s: RootState) => s.auth.token);
  const { cart, loading, error } = useSelector((s: RootState) => s.cart);

  useEffect(() => {
    if (token) {
      dispatch(fetchCart({ token }));
    }
  }, [dispatch, token]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />
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
