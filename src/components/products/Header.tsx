import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { Input } from "../ui/input";
import { useDispatch } from "react-redux";
import { updateSearchTerm } from "@/redux/slices/productsSlice";
import type { AppDispatch } from "@/redux/store";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import CartCountBadge from "../cart/CartCountBadge";
import UserButton from "../UserButton";

const Header = () => {
  // REDUX HOOKS
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { filterParamsValues } = useSelector(
    (state: RootState) => state.products
  );

  const handleSearchChange = (value: string) => {
    dispatch(updateSearchTerm(value));
  };

  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200/50 bg-background-light/80 px-4 backdrop-blur-sm dark:border-neutral-700/50 dark:bg-background-dark/80 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-16  items-center justify-between">
        <div className="flex items-center gap-6">
          <a className="flex items-center gap-2" href="/">
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
            <span className="text-xl font-bold text-neutral-900 dark:text-white">
              SportZone
            </span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <label className="relative">
              <span className="sr-only">Search</span>
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-neutral-400 dark:text-neutral-500"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </span>
              <Input
                className="form-input w-full rounded-lg border-neutral-300 bg-background-light py-2 pl-10 pr-4 text-sm placeholder-neutral-400 focus:border-primary focus:ring-primary dark:border-neutral-700 dark:bg-background-dark dark:placeholder-neutral-500 dark:focus:border-primary dark:focus:ring-primary"
                value={filterParamsValues.searchTerm || ""}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search"
                type="search"
              />
            </label>
          </div>
          <ModeToggle />
          <div className="relative">
            <Button
              onClick={() => navigate("/cart")}
              className="flex cursor-pointer items-center text-black dark:text-white   justify-center rounded-full h-10 w-10 bg-background-light dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <ShoppingCart strokeWidth={2} className="size-5" />
            </Button>
            <CartCountBadge />
          </div>
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
