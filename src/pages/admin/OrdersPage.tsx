import { useState } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ApiResponse, Order } from "@/types";
import orderService from "@/services/orderServices";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

const OrdersPage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token);

  const { data: ordersRes, isLoading } = useQuery<
    ApiResponse<{ orders: Order[]; pagination?: any }>,
    Error
  >({
    queryKey: ["admin-orders"],
    queryFn: () => orderService.getOrders(token ?? undefined),
    enabled: !!token,
  });

  const orders = ordersRes?.data?.orders ?? [];

  const filteredOrders = orders.filter(
    (order) =>
      (order.user?.email ?? "").toLowerCase().includes(search.toLowerCase()) ||
      order._id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <header className="mb-8 flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold  dark:text-background-light">
            Orders
          </h2>
          <p className="/60 dark:text-background-light/60">
            Review and manage customer orders placed on the store.
          </p>
        </div>
      </header>

      <div className="mb-6 max-w-sm">
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          htmlFor="search"
        >
          Search Orders
        </label>
        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-2 pr-4 py-2 rounded-lg border border-primary/20 dark:border-primary/30 bg-background-light dark:bg-background-dark text-gray-800 dark:text-white focus:ring-primary focus:border-primary"
            name="search"
            placeholder="Search by order id or customer email"
            type="text"
          />
        </div>
      </div>

      <div className="@container">
        <div className="overflow-x-auto rounded-lg border border-primary/20 dark:border-primary/30">
          <Table className="w-full text-left">
            <TableHeader className="bg-primary/10 dark:bg-primary/20">
              <TableRow>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Order ID
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Customer
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Items
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Total
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Status
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Date
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-primary/20 dark:divide-primary/30">
              {isLoading ? (
                <tr>
                  <td className="p-4" colSpan={6}>
                    <Loader />
                  </td>
                </tr>
              ) : filteredOrders.length === 0 ? (
                <TableRow>
                  <TableCell className="p-4" colSpan={6}>
                    No orders found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredOrders.map((order) => (
                  <TableRow
                    key={order._id}
                    className="hover:bg-primary/5 dark:hover:bg-primary/10"
                  >
                    <TableCell className="p-4">
                      <button
                        onClick={() => navigate(`/admin/orders/${order._id}`)}
                        className="text-primary hover:underline"
                      >
                        {order._id}
                      </button>
                    </TableCell>
                    <TableCell className="p-4 text-gray-600 dark:text-gray-400">
                      {order.user?.email}
                    </TableCell>
                    <TableCell className="p-4 text-gray-600 dark:text-gray-400">
                      {order.items.length}
                    </TableCell>
                    <TableCell className="p-4 text-gray-600 dark:text-gray-400">
                      ${order.totalAmount}
                    </TableCell>
                    <TableCell className="p-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === "delivered"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : order.status === "pending"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell className="p-4 text-gray-600 dark:text-gray-400">
                      {new Date(order.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell className="p-4">
                      <button
                        onClick={() => navigate(`/admin/orders/${order._id}`)}
                        className="text-primary hover:underline"
                      >
                        View Details
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};

export default OrdersPage;
