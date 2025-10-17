import { Button } from "@/components/ui/button";
import { Search, Heart, ShoppingCart } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { useNavigate } from "react-router";

const Header = () => {
  // useSelector: Read data from Redux store
  // This component will re-render when these values change
  const { user } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-800 px-10 py-4">
      <div className="flex items-center gap-4 text-gray-900 dark:text-white">
        <div className="w-8 h-8 text-primary">
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold">SportZone</h2>
      </div>
      <nav className="hidden lg:flex items-center gap-8">
        <a
          className="text-base font-medium hover:text-primary transition-colors"
          href="#"
        >
          New Arrivals
        </a>
        <a
          className="text-base font-medium hover:text-primary transition-colors"
          href="#"
        >
          Men
        </a>
        <a
          className="text-base font-medium hover:text-primary transition-colors"
          href="#"
        >
          Women
        </a>
        <a
          className="text-base font-medium hover:text-primary transition-colors"
          href="#"
        >
          Kids
        </a>
        <a
          className="text-base font-medium hover:text-primary transition-colors"
          href="#"
        >
          Accessories
        </a>
        <a
          className="text-base font-medium hover:text-primary transition-colors"
          href="#"
        >
          Sale
        </a>
      </nav>
      <div className="flex items-center gap-3">
        <ModeToggle />
        <Button
          onClick={() => navigate("/products")}
          className="flex cursor-pointer items-center  justify-center rounded-full h-10 w-10 bg-background-light dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <Search className="size-5" />
        </Button>
        <Button
          onClick={() => navigate("/cart")}
          className="flex cursor-pointer items-center  justify-center rounded-full h-10 w-10 bg-background-light dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ShoppingCart strokeWidth={2} className="size-5" />
        </Button>
        <div
          className="bg-center flex items-center justify-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer"
          // style={{
          //   backgroundImage:
          //     "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdqUQL6NodUkFit9MJImNdwfkodNzyAPR1vmT0fIMU-vVHC0-Jnk7JYkMu9AgahGR9g2gJpRZmxCPx1jffNagiILEUvotCH4If_6yI6cAytrqOLBY9UMf_thwKZ7qXSTqstwkAC5vebgyDue-jQqm38OCBQoOD5Z572ncAoTFrvRkbhNecJ6OFSIbu7_WLjbQVm6Zlb4jQk1B7Idq_4ai7Px5zZQXVkdr2HWbpKY5yoO-wjDrsR4KM5HlVdAJzYpEmJy_ljjUGaiI')",
          // }}
        >
          {user?.email.split("@")[0].charAt(0).toUpperCase() || "A"}
        </div>
      </div>
    </header>
  );
};

export default Header;
