import { useQuery } from "@tanstack/react-query";
import productsService from "@/services/productsServices";
import ProductCarousel from "./ProductCarousel";
import type { ApiResponse, category } from "@/types";
import categoriesService from "@/services/categoriesServices";

const FeaturedCategories = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery<ApiResponse<category[]>>({
    queryKey: ["featured-categories"],
    queryFn: () => categoriesService.getCategories(),
  });

  const firstThreeCategories = response?.data.slice(0, 3);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
        Featured Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {firstThreeCategories?.map((category: category) => (
          <a className="group" href="#">
            <div className="w-full aspect-square rounded-xl overflow-hidden">
              <div
                className="w-full h-full bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${category.image})`,
                }}
              ></div>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              {category.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
