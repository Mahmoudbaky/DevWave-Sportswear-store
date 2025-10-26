import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import Header from "@/components/Header";
import PaymentForm from "@/components/order/PaymentForm";
import AddressForm from "@/components/order/AddressForm";
import { createOrder } from "@/redux/slices/orderSlice";
import { clearCart } from "@/redux/slices/cartSlice";
import type { RootState, AppDispatch } from "@/redux/store";
import type { ShippingAddress } from "@/types";

const OrderPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { user, token } = useSelector((state: RootState) => state.auth);
  const { cart } = useSelector((state: RootState) => state.cart);
  const { isCreating, error, currentOrder } = useSelector(
    (state: RootState) => state.order
  );

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("CashOnDelivery");

  useEffect(() => {
    if (!user || !token) {
      navigate("/login");
      return;
    }
  }, [user, token, navigate]);

  useEffect(() => {
    if (currentOrder) {
      toast.success("Order placed successfully!");
      dispatch(clearCart({ token: token! }));
      navigate("/");
    }
  }, [currentOrder, dispatch, token, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handlePlaceOrder = async () => {
    if (!token) {
      toast.error("Please login to place an order");
      return;
    }

    // Validate shipping address
    if (
      !shippingAddress.fullName ||
      !shippingAddress.address ||
      !shippingAddress.city ||
      !shippingAddress.zipCode ||
      !shippingAddress.phoneNumber
    ) {
      toast.error("Please fill in all shipping address fields");
      return;
    }

    // Check if cart has items
    if (!cart || !cart.items || cart.items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const orderData = {
      shippingAddress,
      paymentMethod,
    };

    dispatch(createOrder({ token, orderData }));
  };

  const calculateTax = (subtotal: number) => {
    return subtotal * 0.1; // 10% tax
  };

  const calculateShipping = () => {
    return 0; // Free shipping
  };

  const subtotal = cart?.totalAmount || 0;
  const tax = calculateTax(subtotal);
  const shipping = calculateShipping();
  const total = subtotal + tax + shipping;

  if (!cart || !cart.items || cart.items.length === 0) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
        <div className="flex min-h-screen w-full flex-col">
          <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="text-center py-16">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                  Your cart is empty
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Add some items to your cart before checkout
                </p>
                <button
                  onClick={() => navigate("/")}
                  className="rounded-lg bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
              Checkout
            </h1>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <AddressForm
                  shippingAddress={shippingAddress}
                  onAddressChange={setShippingAddress}
                />

                <PaymentForm
                  paymentMethod={paymentMethod}
                  onPaymentMethodChange={setPaymentMethod}
                />
              </div>
              <div className="space-y-8">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  3. Order Summary
                </h2>
                <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark p-6">
                  <ul className="divide-y divide-slate-200 dark:divide-slate-800">
                    {cart.items.map((item) => (
                      <li
                        key={item._id}
                        className="flex items-center gap-4 py-4"
                      >
                        <div
                          className="h-16 w-16 flex-shrink-0 rounded bg-cover bg-center"
                          style={{
                            backgroundImage:
                              item.product.images &&
                              item.product.images.length > 0
                                ? `url("${item.product.images[0]}")`
                                : 'url("https://via.placeholder.com/64x64?text=No+Image")',
                          }}
                        ></div>
                        <div className="flex-1">
                          <p className="font-medium text-slate-900 dark:text-white">
                            {item.product.name}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <p className="font-medium text-slate-900 dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 space-y-2 border-t border-slate-200 dark:border-slate-800 pt-6">
                    <div className="flex justify-between text-sm">
                      <p className="text-slate-500 dark:text-slate-400">
                        Subtotal
                      </p>
                      <p className="text-slate-800 dark:text-slate-200">
                        ${subtotal.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-slate-500 dark:text-slate-400">
                        Shipping
                      </p>
                      <p className="text-slate-800 dark:text-slate-200">
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-slate-500 dark:text-slate-400">Tax</p>
                      <p className="text-slate-800 dark:text-slate-200">
                        ${tax.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 dark:border-slate-800 pt-4 mt-4 font-bold text-slate-900 dark:text-white">
                      <p>Total</p>
                      <p>${total.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button
                      onClick={handlePlaceOrder}
                      disabled={isCreating}
                      className="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-bold text-white shadow-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isCreating ? "Placing Order..." : "Place Order"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderPage;
