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
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const UserOrdersPage = () => {
  const [page, setPage] = useState<number>(1);
  const limit = 10;
  const navigate = useNavigate();
  const token = useSelector((s: RootState) => s.auth.token);

  const { data: ordersRes, isLoading } = useQuery<
    ApiResponse<{ orders: Order[]; pagination?: any }>,
    Error
  >({
    queryKey: ["user-orders", page],
    queryFn: () => orderService.getUserOrders(token ?? "", page, limit),
    enabled: !!token,
  });

  const orders: Order[] = ordersRes?.data?.orders ?? [];
  const pagination = ordersRes?.data?.pagination ?? {
    currentPage: page,
    totalPages: 1,
    hasNext: false,
    hasPrev: false,
  };

  if (!token) {
    return (
      <main className="flex-1 p-8">
        <p>Please sign in to view your orders.</p>
      </main>
    );
  }

  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <header className="mb-8">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold dark:text-background-light">
            My Orders
          </h2>
          <p className="/60 dark:text-background-light/60">
            Review your recent orders and track their status.
          </p>
        </div>
      </header>

      <div className="@container">
        <div className="overflow-x-auto rounded-lg border border-primary/20 dark:border-primary/30">
          <Table className="w-full text-left">
            <TableHeader className="bg-primary/10 dark:bg-primary/20">
              <TableRow>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Order ID
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Items
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Total
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Payment
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
                  <td className="p-4" colSpan={7}>
                    <Loader />
                  </td>
                </tr>
              ) : orders.length === 0 ? (
                <TableRow>
                  <TableCell className="p-4" colSpan={7}>
                    No orders found.
                  </TableCell>
                </TableRow>
              ) : (
                orders.map((order) => (
                  <TableRow
                    key={order._id}
                    className="hover:bg-primary/5 dark:hover:bg-primary/10"
                  >
                    <TableCell className="p-4">
                      <button
                        onClick={() => navigate(`/orders/${order._id}`)}
                        className="text-primary hover:underline"
                      >
                        {order._id}
                      </button>
                    </TableCell>
                    <TableCell className="p-4 text-gray-600 dark:text-gray-400">
                      {order.items.length}
                    </TableCell>
                    <TableCell className="p-4 text-gray-600 dark:text-gray-400">
                      ${order.totalAmount}
                    </TableCell>
                    <TableCell className="p-4 text-gray-600 dark:text-gray-400">
                      {order.paymentMethod}
                    </TableCell>
                    <TableCell className="p-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          {
                            delivered:
                              "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                            pending:
                              "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
                          }[order.status as string] ??
                          "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell className="p-4 text-gray-600 dark:text-gray-400">
                      {new Date(order.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell className="p-4">
                      <Button
                        onClick={() => navigate(`/orders/${order._id}`)}
                        className="cursor-pointer hover:underline"
                      >
                        <Eye className="size-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination controls */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Page {pagination.currentPage} of {pagination.totalPages}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={!pagination.hasPrev || isLoading}
              className="px-3 py-1 rounded bg-background-light dark:bg-background-dark border hover:bg-primary/5 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setPage((p) =>
                  Math.min((pagination.totalPages as number) || p + 1, p + 1)
                )
              }
              disabled={!pagination.hasNext || isLoading}
              className="px-3 py-1 rounded bg-background-light dark:bg-background-dark border hover:bg-primary/5 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserOrdersPage;
