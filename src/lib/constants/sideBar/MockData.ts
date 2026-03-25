import type { MenuItems } from "@/lib/types/sideBar";
import { Clock, CreditCard, Gift, HelpCircle, LayoutDashboard, List, MapPin, Settings, Shield, User } from "lucide-react";

export const menuItems: MenuItems[] = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/profile/dashboard",
  },
  { icon: User, label: "Personal Info", path: "/profile/info" },
  {
    icon: CreditCard,
    label: "Payment & Wallet",
    path: "/profile/payments-wallet",
  },
  { icon: Clock, label: "Order History", path: "/profile/orders-history" },
  { icon: List, label: "Smart Lists", path: "/profile/smart-list" },
  { icon: MapPin, label: "Addresses", path: "/profile/addresses" },
  { icon: Shield, label: "Security & Login", path: "/profile/security" },
  { icon: Gift, label: "Loyalty & Rewards", path: "/profile/loyalty" },
  { icon: HelpCircle, label: "Help & Support", path: "/profile/support" },
  { icon: Settings, label: "Settings", path: "/profile/settings" },
];