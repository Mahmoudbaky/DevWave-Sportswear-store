import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import orderService from "@/services/orderServices";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import type { Order, ApiResponse } from "@/types";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrdersDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const token = useSelector((s: RootState) => s.auth.token);

  const { data, isLoading, error } = useQuery<ApiResponse<Order>, Error>({
    queryKey: ["order", id],
    queryFn: async () => {
      if (!id) throw new Error("No order id provided");
      return await orderService.getOrderById(id, token || undefined);
    },
    enabled: !!id,
  });

  const order: Order | undefined = data?.data;

  if (isLoading) return <div className="p-8">Loading order details...</div>;

  if (error)
    return <div className="p-8 text-red-600">Error loading order details.</div>;

  if (!order) return <div className="p-8">No order found for id: {id}</div>;

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col  flex-1 gap-8">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-3xl md:text-4xl font-bold tracking-tight">
                    Order Details
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Order #{order._id}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    <Printer className="w-4 h-4" />
                    <span>Print Invoice</span>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 flex flex-col gap-8">
                  <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">
                      Items Ordered
                    </h2>
                    <div className="flex flex-col gap-4">
                      {order.items.map((it) => (
                        <div
                          key={it._id}
                          className="flex gap-4 bg-background-light dark:bg-background-dark p-4 rounded-lg justify-between items-center"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className="bg-center bg-no-repeat bg-cover rounded-lg h-20 w-20"
                              data-alt={it.product.name}
                              style={
                                (it.product as any).images?.[0]
                                  ? {
                                      backgroundImage: `url('${
                                        (it.product as any).images[0]
                                      }')`,
                                    }
                                  : (it.product as any).image
                                  ? {
                                      backgroundImage: `url('${
                                        (it.product as any).image
                                      }')`,
                                    }
                                  : undefined
                              }
                            ></div>
                            <div className="flex flex-1 flex-col justify-center">
                              <p className="text-base font-medium">
                                {it.product.name}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Quantity: {it.quantity}
                              </p>
                            </div>
                          </div>
                          <div className="shrink-0">
                            <p className="text-base font-medium">
                              ${it.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">
                      Order Summary
                    </h2>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <p className="text-gray-500 dark:text-gray-400">
                          Subtotal
                        </p>
                        <p className="font-medium">
                          ${order.subtotal.toFixed(2)}
                        </p>
                      </div>
                      {/* If shipping/taxes exist on backend, show them here. For now these are placeholders if not provided */}
                      <div className="flex justify-between">
                        <p className="text-gray-500 dark:text-gray-400">
                          Shipping
                        </p>
                        <p className="font-medium">
                          {order.shippingFee
                            ? `$${order.shippingFee.toFixed(2)}`
                            : "Free"}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-500 dark:text-gray-400">
                          Taxes
                        </p>
                        <p className="font-medium">
                          {order.taxAmount
                            ? `$${order.taxAmount.toFixed(2)}`
                            : "Free"}
                        </p>
                      </div>
                      <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                      <div className="flex justify-between text-lg font-bold">
                        <p>Total</p>
                        <p>${order.totalAmount.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-1 flex flex-col gap-8">
                  <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm">
                    <h2 className="text-xl font-semibold mb-6">Order Status</h2>
                    <div className="grid grid-cols-[auto_1fr] gap-x-4">
                      <div className="flex flex-col items-center gap-1">
                        <div
                          className={`h-6 w-6 rounded-full flex items-center justify-center text-white ${
                            order.status === "delivered"
                              ? "bg-accent-green"
                              : "bg-primary"
                          }`}
                        >
                          <span className="material-symbols-outlined text-base">
                            {order.status === "delivered"
                              ? "local_shipping"
                              : "check"}
                          </span>
                        </div>
                        <div className="w-px bg-primary grow"></div>
                      </div>
                      <div className="flex flex-col pb-8">
                        <p className="text-base font-medium">{order.status}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(order.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">
                      Shipping &amp; Payment
                    </h2>
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="font-semibold mb-1">Shipping Address</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {order.shippingAddress.fullName}
                          <br />
                          {order.shippingAddress.address}
                          <br />
                          {order.shippingAddress.city},{" "}
                          {order.shippingAddress.zipCode}
                          <br />
                          {order.shippingAddress.phoneNumber}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Payment Method</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {order.paymentMethod}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDetailsPage;
