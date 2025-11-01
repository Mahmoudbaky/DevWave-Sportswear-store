import Header from "@/components/products/Header";
import Filters from "@/components/products/Filters";
import { useSelector, useDispatch } from "react-redux";

import ProductsCard from "@/components/products/ProductsCard";
import { useEffect } from "react";
import type { AppDispatch, RootState } from "@/redux/store";
import { getFilteredProducts } from "@/redux/slices/productsSlice";
import { useParams } from "react-router";
import { updateCategory } from "@/redux/slices/productsSlice";

const ProductFilterPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { category } = useParams<{ category: string }>();

  const { filteredProducts, filterParamsValues } = useSelector(
    (state: RootState) => state.products
  );

  // When the route param `category` changes (e.g., user clicks a featured category),
  // update the centralized filter params so Filters and the products query react to it.
  useEffect(() => {
    if (category) {
      dispatch(updateCategory(category));
    }
    // If category is undefined or empty, we don't change the current filter (keeps previous selection).
  }, [category, dispatch]);

  useEffect(() => {
    dispatch(getFilteredProducts(filterParamsValues));
  }, [filterParamsValues, dispatch]);

  // console.log(filterParamsValues);

  // Trigger getFilteredProducts whenever filterParamsValues changes
  // useEffect(() => {
  //   dispatch(getFilteredProducts({ category, ...filterParamsValues }));
  // }, [filterParamsValues, dispatch, category]);

  return (
    <div className="font-display bg-background-light text-neutral-800 dark:bg-background-dark dark:text-white">
      <div className="flex min-h-screen w-full flex-col">
        {/* Header */}
        <Header />

        <main className="mx-auto grid w-full  flex-1 grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
          {/* Filter */}
          <Filters />

          <section className="lg:col-span-3">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Sportswear
            </h1>

            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {/* products */}
              {filteredProducts.map((product) => (
                <ProductsCard key={product._id} product={product} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProductFilterPage;
