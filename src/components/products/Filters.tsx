import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";

import { useDispatch } from "react-redux";
import { getFilteredProducts } from "@/redux/slices/productsSlice";
import type { AppDispatch } from "@/redux/store";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import type { ProductsFilterParams } from "@/types";
import categoriesService from "@/services/categoriesServices";
import productsService from "@/services/productsServices";
import { useQuery } from "@tanstack/react-query";

const Filters = () => {
  // REDUX HOOKS
  const dispatch = useDispatch<AppDispatch>();

  // QUERIES
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoriesService.getCategories(),
  });

  const {
    data: brands,
    isLoading: isLoadingBrands,
    isError: isErrorBrands,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: () => productsService.getAllBrands(),
  });

  // FORM SETUP
  const { watch, setValue } = useForm<ProductsFilterParams>({
    defaultValues: {
      category: "",
      brand: "",
      searchTerm: "",
      minPrice: undefined,
      maxPrice: undefined,
    },
  });

  // Watch all form values
  const watchedValues = watch();

  useEffect(() => {
    const filterParams: ProductsFilterParams = {};

    if (watchedValues.category) filterParams.category = watchedValues.category;
    if (watchedValues.brand) filterParams.brand = watchedValues.brand;
    if (watchedValues.searchTerm)
      filterParams.searchTerm = watchedValues.searchTerm;
    if (watchedValues.minPrice)
      filterParams.minPrice = Number(watchedValues.minPrice);
    if (watchedValues.maxPrice)
      filterParams.maxPrice = Number(watchedValues.maxPrice);

    console.log(filterParams);

    // Only dispatch if there's at least one filter applied
    if (Object.keys(filterParams).length > 0) {
      dispatch(getFilteredProducts(filterParams));
    }
  }, [watchedValues, dispatch]);

  return (
    <aside className="space-y-8 lg:col-span-1">
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
        Filters
      </h2>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
          Category
        </h3>
        <Select
          value={watchedValues.category || ""}
          onValueChange={(value) => setValue("category", value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {isLoading ? (
              <SelectGroup>
                <SelectLabel>Loading categories...</SelectLabel>
              </SelectGroup>
            ) : isError ? (
              <SelectGroup>
                <SelectLabel>Error loading categories</SelectLabel>
              </SelectGroup>
            ) : categories?.data && categories.data.length > 0 ? (
              categories.data.map((category) => (
                <SelectItem key={category._id} value={String(category._id)}>
                  {category.name}
                </SelectItem>
              ))
            ) : (
              <SelectGroup>
                <SelectLabel>No categories available</SelectLabel>
              </SelectGroup>
            )}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
          Brand
        </h3>
        <Select
          value={watchedValues.brand || ""}
          onValueChange={(value) => setValue("brand", value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select brand" />
          </SelectTrigger>
          <SelectContent>
            {isLoadingBrands ? (
              <SelectGroup>
                <SelectLabel>Loading brands...</SelectLabel>
              </SelectGroup>
            ) : isErrorBrands ? (
              <SelectGroup>
                <SelectLabel>Error loading brands</SelectLabel>
              </SelectGroup>
            ) : brands?.data && brands.data.length > 0 ? (
              brands.data.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))
            ) : (
              <SelectGroup>
                <SelectLabel>No brands available</SelectLabel>
              </SelectGroup>
            )}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
          Min Price
        </h3>
        <Select
          value={watchedValues.minPrice?.toString() || ""}
          onValueChange={(value) => setValue("minPrice", Number(value))}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select min price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">$0</SelectItem>
            <SelectItem value="25">$25</SelectItem>
            <SelectItem value="50">$50</SelectItem>
            <SelectItem value="75">$75</SelectItem>
            <SelectItem value="100">$100</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
          Max Price
        </h3>
        <Select
          value={watchedValues.maxPrice?.toString() || ""}
          onValueChange={(value) => setValue("maxPrice", Number(value))}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select max price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="50">$50</SelectItem>
            <SelectItem value="100">$100</SelectItem>
            <SelectItem value="150">$150</SelectItem>
            <SelectItem value="200">$200</SelectItem>
            <SelectItem value="250">$250</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </aside>
  );
};

export default Filters;
