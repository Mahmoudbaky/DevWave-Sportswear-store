import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import ImageDisplay from "@/components/products/ImageDisplay";
import productsService from "@/services/productsServices";
import CustomerReviews from "@/components/products/CustomerReviews";
import ProductsYouMayLike from "@/components/products/ProductsYouMayLike";
import ReviewDialog from "@/components/products/ReviewDialog";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: productResponse,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => productsService.getProduct(id!),
    enabled: !!id,
  });

  const product = productResponse?.data;

  if (isLoading) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <main className="px-4 md:px-10 lg:px-20 py-5">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-6">
                  <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl h-96"></div>
                  <div className="flex flex-col gap-4">
                    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-8 w-3/4"></div>
                    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-6 w-full"></div>
                    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-4 w-1/2"></div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="bg-background-light dark:bg-background-dark font-display">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <main className="px-4 md:px-10 lg:px-20 py-5">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center h-96">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Product Not Found
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {error?.message ||
                      "The product you're looking for doesn't exist."}
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <main className="px-4 md:px-10 lg:px-20 py-5">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-2 p-4 text-sm">
                <a
                  className="text-gray-500 dark:text-gray-400 font-medium leading-normal"
                  href="/"
                >
                  Home
                </a>
                <span className="text-gray-500 dark:text-gray-400 font-medium leading-normal">
                  /
                </span>
                <span className="text-gray-900 dark:text-white font-medium leading-normal">
                  {product.name}
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-6">
                {/* here will be image section */}
                <ImageDisplay
                  images={product.images ? [product.images[0]] : []}
                />

                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                      {product.name}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-normal">
                      {product.description}
                    </p>
                    <p className="text-gray-900 dark:text-white text-3xl font-bold leading-normal">
                      ${product.price}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <button className="mt-8 w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]">
                      <span className="truncate">Add to Cart</span>
                    </button>
                    <div className="mt-4">
                      <ReviewDialog
                        productId={product._id ?? id!}
                        renderTrigger={(open) => (
                          <button
                            onClick={open}
                            className="w-full mt-2 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 border border-primary text-primary text-base font-bold leading-normal tracking-[0.015em] bg-transparent"
                          >
                            Write a Review
                          </button>
                        )}
                      />
                    </div>
                    <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6">
                      <h3 className="text-gray-900 dark:text-white text-lg font-bold">
                        Product Details
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed mt-2">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* customer reviews */}
              <CustomerReviews productId={product._id} />

              {/* Products you may like */}
              <ProductsYouMayLike />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
