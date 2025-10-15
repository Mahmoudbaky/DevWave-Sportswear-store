import { useQuery } from "@tanstack/react-query";
import productsService from "@/services/productsServices";
import ProductCarousel from "./ProductCarousel";
import type { ApiResponse, Product } from "@/types";

const FeaturedProducts = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery<ApiResponse<Product[]>>({
    queryKey: ["new-products"],
    queryFn: () => productsService.getNewProducts(),
  });

  console.log("API Response:", response);
  console.log("Products data:", response?.data);

  return <ProductCarousel data={response?.data ?? []} />;
};

export default FeaturedProducts;

// <div className="relative rounded-xl overflow-hidden mb-16">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZb9tZoMwNHUZf2xZ3NLqu_dLFdYC7Tcm_a6G7RJNN2j-03voHyjCAt7I9hOaNjKtk_hayfxslveGkAw_cozJSpvzWWROSXmoeF7pzvoLLScZKevjQLqMDfKWSa2vStfHnwP9cJxWDu8JxJ_TPc2zsrZjjIsbCiPNC532jaSAseu6gQwBR9WKr8QO6uDFuNtKpwUYS0irPSzzAKul8-e8ZPR5N5sXqj4dXZY5ugwk-879QgTU6N3_kmQv4NgZ_nZUwN94Q7dOFcak')",
//         }}
//       ></div>
//       <div className="absolute inset-0 bg-black/40"></div>
//       <div className="relative min-h-[480px] flex flex-col items-start justify-end p-8 sm:p-12 text-white">
//         <div className="max-w-lg">
//           <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
//             New Arrivals
//           </h1>
//           <p className="mt-4 text-lg">
//             Explore the latest sportswear and gear for your active lifestyle.
//           </p>
//           <button className="mt-8 flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-colors">
//             <span>Shop Now</span>
//           </button>
//         </div>
//       </div>
//     </div>
