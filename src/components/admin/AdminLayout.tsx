import { Outlet } from "react-router";
import { ShoppingBag, Barcode, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  const params = useParams();
  console.log(params);
  const [link, setLink] = useState<string>("/admin");

  const navigationLinks = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { name: "Orders", icon: ShoppingBag, href: "/admin/orders" },
    { name: "Products", icon: Barcode, href: "/admin/products" },
    { name: "Categories", icon: Barcode, href: "/admin/categories" },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display  dark:text-background-light">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
