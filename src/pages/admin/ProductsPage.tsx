import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Loader } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import type { ApiResponse, Product } from "@/types";
import productsService from "@/services/productsServices";
import { useState } from "react";
import { useNavigate } from "react-router";

const ProductsPage = () => {
  const [search] = useState("");
  const navigate = useNavigate();

  const { data: products, isLoading } = useQuery<ApiResponse<Product[]>, Error>(
    {
      queryKey: ["products"],
      queryFn: () => productsService.getProducts(),
    }
  );

  const filteredProducts =
    products?.data.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    ) ?? [];

  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <header className="mb-8 flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold  dark:text-background-light">
            Products
          </h2>
          <p className="/60 dark:text-background-light/60">
            Manage your product listings, including adding, editing, and
            removing products.
          </p>
        </div>

        <Button
          onClick={() => navigate("/admin/products-form")}
          className="flex cursor-pointer items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
        >
          <Plus strokeWidth={1.5} />
          <span>Add Product</span>
        </Button>
      </header>

      <div className="mb-6 max-w-sm">
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          htmlFor="search"
        >
          Search Products
        </label>
        <div className="relative">
          <input
            className="w-full pl-2 pr-4 py-2 rounded-lg border border-primary/20 dark:border-primary/30 bg-background-light dark:bg-background-dark text-gray-800 dark:text-white focus:ring-primary focus:border-primary"
            name="search"
            placeholder="Search by name, category, or SKU"
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
                  Product
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Category
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Price
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Stock
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Status
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-primary/20 dark:divide-primary/30">
              {isLoading ? (
                <Loader />
              ) : filteredProducts.length === 0 ? (
                <TableRow>
                  <TableCell className="p-4" colSpan={6}>
                    No products found.
                  </TableCell>
                </TableRow>
              ) : (
                filteredProducts.map((product) => (
                  <TableRow
                    key={product._id}
                    className="hover:bg-primary/5 dark:hover:bg-primary/10"
                  >
                    <TableCell className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                          src={
                            product.images?.[0] ??
                            "https://via.placeholder.com/48"
                          }
                        />
                        <span className="font-medium text-gray-800 dark:text-white">
                          {product.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="p-4 text-gray-600 dark:text-gray-400">
                      {product.category?.name}
                    </TableCell>
                    <TableCell className="p-4 text-gray-600 dark:text-gray-400">
                      ${product.price}
                    </TableCell>
                    <TableCell className="p-4 text-gray-600 dark:text-gray-400">
                      {product.stock ?? 0}
                    </TableCell>
                    <TableCell className="p-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          (product.stock ?? 0) > 20
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : (product.stock ?? 0) > 0
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {(product.stock ?? 0) > 20
                          ? "In Stock"
                          : (product.stock ?? 0) > 0
                          ? "Low Stock"
                          : "Out of Stock"}
                      </span>
                    </TableCell>
                    <TableCell className="p-4">
                      <button
                        onClick={() =>
                          navigate(`/admin/products-form/${product._id}`)
                        }
                        className="text-primary hover:underline"
                      >
                        Edit
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

export default ProductsPage;
