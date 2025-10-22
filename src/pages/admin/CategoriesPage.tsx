import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "@/types";
import categoriesService from "@/services/categoriesServices";
import { useNavigate } from "react-router";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CategoriesPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery<ApiResponse<any[]>, Error>({
    queryKey: ["categories"],
    queryFn: () => categoriesService.getCategories(),
  });

  const categories = response?.data ?? [];

  const filtered =
    categories?.filter((c: any) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    ) ?? [];

  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <header className="mb-8 flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold  dark:text-background-light">
            Categories
          </h2>
          <p className="/60 dark:text-background-light/60">
            Manage your categories, including adding, editing, and removing
            categories.
          </p>
        </div>

        <Button
          onClick={() => navigate("/admin/category-form")}
          className="flex cursor-pointer items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
        >
          <Plus strokeWidth={1.5} />
          <span>Add Category</span>
        </Button>
      </header>

      <div className="mb-6 max-w-sm">
        <label
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          htmlFor="search"
        >
          Search Categories
        </label>
        <div className="relative">
          <input
            className="w-full pl-2 pr-4 py-2 rounded-lg border border-primary/20 dark:border-primary/30 bg-background-light dark:bg-background-dark text-gray-800 dark:text-white focus:ring-primary focus:border-primary"
            name="search"
            placeholder="Search by name"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="@container">
        <div className="overflow-x-auto rounded-lg border border-primary/20 dark:border-primary/30">
          <Table className="w-full text-left">
            <TableHeader className="bg-primary/10 dark:bg-primary/20">
              <TableRow>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Image
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Name
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Description
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Created
                </TableHead>
                <TableHead className="p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-primary/20 dark:divide-primary/30">
              {isLoading ? (
                <Loader />
              ) : isError ? (
                <TableRow>
                  <TableCell className="p-4" colSpan={5}>
                    {(error as Error)?.message ?? "Failed to load categories."}
                  </TableCell>
                </TableRow>
              ) : filtered.length === 0 ? (
                <TableRow>
                  <TableCell className="p-4" colSpan={5}>
                    No categories found.
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((cat: any) => (
                  <TableRow
                    key={cat._id}
                    className="hover:bg-primary/5 dark:hover:bg-primary/10"
                  >
                    <TableCell className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          alt={cat.name}
                          className="w-12 h-12 rounded-lg object-cover"
                          src={cat.image ?? "https://via.placeholder.com/48"}
                        />
                        <span className="font-medium text-gray-800 dark:text-white">
                          {cat.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="p-4 text-gray-600 dark:text-gray-400">
                      {cat.name}
                    </TableCell>
                    <TableCell className="p-4 text-gray-600 dark:text-gray-400">
                      {cat.desscription ?? "-"}
                    </TableCell>
                    <TableCell className="p-4 text-gray-600 dark:text-gray-400">
                      {cat.createdAt
                        ? new Date(cat.createdAt).toLocaleDateString()
                        : "-"}
                    </TableCell>
                    <TableCell className="p-4">
                      <button
                        onClick={() =>
                          navigate(`/admin/category-form/${cat._id}`)
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
            <TableCaption>
              Showing {filtered.length} category
              {filtered.length !== 1 ? "ies" : ""}
            </TableCaption>
          </Table>
        </div>
      </div>
    </main>
  );
};

export default CategoriesPage;
