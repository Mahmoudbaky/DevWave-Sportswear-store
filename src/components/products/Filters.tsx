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
import type { AppDispatch } from "@/redux/store";
import categoriesService from "@/services/categoriesServices";
import productsService from "@/services/productsServices";
import { useQuery } from "@tanstack/react-query";
import {
  updateCategory,
  updateBrand,
  updateMinPrice,
  updateMaxPrice,
} from "@/redux/slices/productsSlice";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

const Filters = () => {
  // REDUX HOOKS
  const dispatch = useDispatch<AppDispatch>();

  const { filterParamsValues } = useSelector(
    (state: RootState) => state.products
  );

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

  // Extract values from centralized state
  const { category, brand, minPrice, maxPrice } = filterParamsValues;

  // Handler functions for filter changes
  const handleCategoryChange = (value: string) => {
    dispatch(updateCategory(value));
  };

  const handleBrandChange = (value: string) => {
    dispatch(updateBrand(value));
  };

  const handleMinPriceChange = (value: string) => {
    const price = value ? Number(value) : undefined;
    dispatch(updateMinPrice(price));
  };

  const handleMaxPriceChange = (value: string) => {
    const price = value ? Number(value) : undefined;
    dispatch(updateMaxPrice(price));
  };

  return (
    <aside className="space-y-8 lg:col-span-1">
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
        Filters
      </h2>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
          Category
        </h3>
        <Select value={category || ""} onValueChange={handleCategoryChange}>
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
        <Select value={brand || ""} onValueChange={handleBrandChange}>
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
          value={minPrice?.toString() || ""}
          onValueChange={handleMinPriceChange}
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
          value={maxPrice?.toString() || ""}
          onValueChange={handleMaxPriceChange}
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
