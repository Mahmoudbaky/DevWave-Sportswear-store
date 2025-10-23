import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import type { Cart } from "@/types";
import type { RootState } from "@/redux/store";
import { toast } from "sonner";

interface Props {
  cart: Cart | null;
}

const OrderSummary = ({ cart }: Props) => {
  const navigate = useNavigate();
  const { user, token } = useSelector((state: RootState) => state.auth);

  const subtotal = cart?.subtotal ?? 0;
  const shipping = cart?.shippingFee ?? 0; // Free shipping
  const tax = cart?.taxAmount ?? 0; // 10% tax
  const total = cart?.totalAmount ?? 0;

  const handleProceedToCheckout = () => {
    // Check if user is logged in
    if (!user || !token) {
      toast.error("Please login to proceed to checkout");
      navigate("/login");
      return;
    }

    // Check if cart has items
    if (!cart || !cart.items || cart.items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    // Navigate to order page
    navigate("/order");
  };

  return (
    <div className="sticky top-28">
      <div className="bg-white dark:bg-slate-800/50 rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          Order Summary
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Subtotal</span>
            <span className="font-medium text-slate-800 dark:text-slate-100">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Shipping</span>
            <span className="font-medium text-slate-800 dark:text-slate-100">
              {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Estimated Tax</span>
            <span className="font-medium text-slate-800 dark:text-slate-100">
              ${tax.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-700 my-6"></div>
        <div className="flex justify-between text-lg font-bold text-slate-900 dark:text-white">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          onClick={handleProceedToCheckout}
          disabled={!cart || !cart.items || cart.items.length === 0}
          className="w-full mt-8 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
