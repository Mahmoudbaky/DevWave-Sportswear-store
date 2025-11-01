import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import SignOutForm from "./SignOutForm";

const UserButton = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="relative cursor-pointer w-8 h-8 rounded-full ml-2 flex items-center justify-center bg-gray-200"
            >
              <Avatar className="w-10 h-10">
                <AvatarImage src={user?.userImage} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <div className="text-sm font-medium leading-none">
                {user?.userName}
              </div>
              <div className="text-sm text-muted-foreground leading-none">
                {user?.email}
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <a href="/user" className="w-full">
              User Profile
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="/user-orders" className="w-full">
              Order History
            </a>
          </DropdownMenuItem>

          {user?.role === "admin" && (
            <DropdownMenuItem>
              <a href="/admin" className="w-full">
                Admin
              </a>
            </DropdownMenuItem>
          )}

          <DropdownMenuItem className="p-0 mb-1">
            <SignOutForm />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
