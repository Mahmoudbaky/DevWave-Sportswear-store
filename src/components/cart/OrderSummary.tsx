import type { Cart } from "@/types";

interface Props {
  cart: Cart | null;
}

const OrderSummary = ({ cart }: Props) => {
  const subtotal = cart?.totalAmount ?? 0;
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
              Free
            </span>
          </div>
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Estimated Tax</span>
            <span className="font-medium text-slate-800 dark:text-slate-100">
              $0.00
            </span>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-700 my-6"></div>
        <div className="flex justify-between text-lg font-bold text-slate-900 dark:text-white">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <button className="w-full mt-8 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
