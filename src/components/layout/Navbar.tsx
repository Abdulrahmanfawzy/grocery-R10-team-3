import {
  Search,
  ShoppingCart,
  User,
  Home,
  LayoutGrid,
  ChevronDown,
  User2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const token = localStorage.getItem("token");

  return (
    <nav className="w-full bg-white border-b border-gray-100 py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-1 min-w-fit hover:opacity-80 transition-opacity"
        >
          <span className="text-2xl font-black text-[#004a61] tracking-tighter flex items-center">
            Gr<span className="text-[#004a61]">o</span>cery{" "}
            <sup className="text-[#004a61] ml-1 text-2xl">+</sup>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-[#004a61]"
          >
            <Home size={18} /> Home
          </Link>
          <Link
            to="/categories"
            className="flex items-center gap-1.5 hover:text-[#004a61]"
          >
            <LayoutGrid size={18} /> Categories
          </Link>
        </div>

        <div className="flex-1 max-w-2xl hidden sm:flex items-center gap-0">
          <div className="relative flex items-center w-full">
            <div className="absolute left-0 h-full flex items-center px-3 bg-gray-200 border-r border-gray-200 rounded-l-md text-xs font-semibold text-slate-700 cursor-pointer hover:bg-gray-200">
              All Categories <ChevronDown size={14} className="ml-1" />
            </div>
            <Input
              className="pl-32 pr-12 py-5 bg-gray-200 border-gray-200 focus-visible:ring-[#004a61]"
              placeholder="Search for items..."
            />
            <Button className="absolute right-1 bg-[#004a61] hover:bg-[#003649] h-8 w-8 p-0">
              <Search size={16} className="text-white" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative">
              <ShoppingCart
                size={24}
                className="text-slate-400 group-hover:text-[#004a61]"
              />
              <span className="absolute -top-1 -right-1 bg-gray-200 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </div>
            <span className="hidden lg:block text-sm font-medium text-slate-600">
              My cart
            </span>
          </Link>

          <Link
            to={token ? "/profile" : "/login"}
            className="bg-[#004a61] hover:bg-[#003649] flex items-center gap-2 rounded-md px-4 h-10 text-white text-sm font-medium transition-colors"
          >
            <span className="text-sm font-medium">
              {token ? <User size={18} /> : "signin"}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
