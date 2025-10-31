import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

import { useNavigate } from "react-router";
import UserButton from "./UserButton";
import CartCountBadge from "./cart/CartCountBadge";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-800 px-10 py-4">
      <a href="/">
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
      </a>
      <div className="flex items-center gap-3">
        <ModeToggle />
        <Button
          onClick={() => navigate("/products")}
          className="flex cursor-pointer text-black dark:text-white items-center justify-center rounded-full h-10 w-10 bg-background-light dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <Search className="size-5" />
        </Button>
        <div className="relative">
          <Button
            onClick={() => navigate("/cart")}
            className="flex cursor-pointer text-black dark:text-white items-center justify-center rounded-full h-10 w-10 bg-background-light dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <ShoppingCart strokeWidth={2} className="size-5" />
          </Button>
          <CartCountBadge />
        </div>
        <UserButton />
      </div>
    </header>
  );
};

export default Header;
