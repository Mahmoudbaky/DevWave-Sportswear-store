import React, { useMemo } from "react";
// NavLink is provided by react-router-dom in the app; import may require project types to be installed
import { NavLink } from "react-router";
import {
  ShoppingBag,
  Barcode,
  LayoutDashboard,
  DollarSign,
} from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Keep navigation links at module scope to ensure stable references
const navigationLinks = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { name: "Orders", icon: ShoppingBag, href: "/admin/orders" },
  { name: "Products", icon: Barcode, href: "/admin/products" },
  { name: "Categories", icon: DollarSign, href: "/admin/categories" },
];

const Sidebar = React.memo(function Sidebar() {
  const { user } = useSelector((state: RootState) => state.auth);

  const avatarStyle = useMemo(
    () => ({
      backgroundImage:
        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBo9u_7ZxBSWGacj9em0_2mAqmGH7fooL4K2MByi8bFbxyDwvSYNa3cPGtdtINYZnoHNhCsXbW-Ke30-8C1LXsefOIge8BLUR5qH1Z8buN3t1mjSaffqrmZpMBX63t67Iu4iXiPFAMXswNDkaR4KHBHONw7ZDuT5ZWQ0DVlxtm9o9lzD738tLxrOUwpANcxPAvNmG9zwShlgDLiLPpsmNB51fVRgpaUSU7OT7WlslOZV44bIUdUtDvy1gA_rWyv8uIXPVA5ho8R7Jk")',
    }),
    []
  );

  return (
    <aside className="w-64 bg-background-light dark:bg-background-dark border-r border-primary/20 dark:border-primary/10 flex flex-col">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-primary/20 dark:border-primary/10">
        <div className="bg-primary p-2 rounded-lg">
          <svg
            className="size-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.44L19.56 8.19L12 11.94L4.44 8.19L12 4.44ZM4 9.87L11 13.5V19.07L4 15.42V9.87ZM13 19.07V13.5L20 9.87V15.42L13 19.07Z" />
          </svg>
        </div>
        <h1 className="text-xl font-bold dark:text-background-light">
          SportZone
        </h1>
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navigationLinks.map((nav) => (
            <li key={nav.name}>
              <NavLink
                to={nav.href}
                end={nav.href === "/admin"}
                className={(props: any) => {
                  const isActive = props.isActive as boolean;
                  return `flex items-center gap-3 px-4 py-2 rounded ${
                    isActive
                      ? "bg-primary/10 dark:bg-primary/20 text-primary font-semibold"
                      : "text-primary/80 hover:bg-primary/10 dark:hover:bg-primary/10"
                  }`;
                }}
              >
                <nav.icon className="size-5" />
                {nav.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-6 py-4 border-t border-primary/20 dark:border-primary/10">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={user?.userImage} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold dark:text-background-light">
              {user?.email.split("@")[0]} <Badge>Admin</Badge>
            </p>
            <a
              className="text-sm text-primary/80 dark:text-primary/70 hover:text-primary"
              href="#"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
});

export default Sidebar;
