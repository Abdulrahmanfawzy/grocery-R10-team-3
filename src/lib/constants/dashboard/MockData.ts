import {
  Calendar,
  Package,
  Percent,
  PoundSterling,
  ShoppingBag,
  ShoppingCart,
  Star,
  TrendingUp,
} from "lucide-react";
import type {
  Categories,
  DashboardCard,
  Orders,
  Purchases,
  Status,
  UserData,
} from "../../types/dashboard";

export const userData: UserData[] = [
  { icon: Package, label: "Track Orders", value: "3 Active" },
  { icon: Star, label: "Loyalty Points", value: "2,450 pts" },
  { icon: PoundSterling, label: "Store Credit", value: "£12.50" },
];

export const cards: DashboardCard[] = [
  {
    title: "Current Cart",
    icon: ShoppingCart,
    buttonText: "View Cart",
    mainInfo: "5 items in cart",
    subInfo: "£28.45",
    extraInfo: "Last updated: 2 hours ago",
    linkText: "Continue Shopping",
  },
  {
    title: "Upcoming Delivery",
    icon: Calendar,
    buttonText: "Track",
    mainInfo: "Tomorrow, Nov 28",
    subInfo: "10:00 AM - 12:00 PM",
    extraInfo: "Order #GP20251126001",
    linkText: "View Details",
  },
];

export const status: Status[] = [
  {
    icon: TrendingUp,
    label: "Monthly Spend",
    value: "£342.18",
    sub: "+ 12% from last month",
    color: "bg-primary",
  },
  {
    icon: ShoppingBag,
    label: "Orders This Month",
    value: "8",
    sub: "Every ~3.7 days",
    color: "bg-primary/90",
  },
  {
    icon: Percent,
    label: "Total Savings",
    value: "£48.50",
    sub: "Coupons &discounts",
    color: "bg-primary/80",
  },
  {
    icon: Star,
    label: "Avg Order Value",
    value: "£42.77",
    sub: "Based on 8 orders",
    color: "bg-primary/70",
  },
];

export const categories: Categories[] = [
  { name: "Fresh Produce", pct: 65 },
  { name: "Dairy", pct: 45 },
  { name: "Bakery", pct: 38 },
  { name: "Snacks", pct: 28 },
];

export const orders: Orders[] = [
  {
    id: "#GP001",
    date: "Nov 24, 2025",
    items: 8,
    total: "£45.32",
    status: "Delivered",
  },
  {
    id: "#GP001",
    date: "Nov 24, 2025",
    items: 8,
    total: "£45.32",
    status: "Delivered",
  },
  {
    id: "#GP001",
    date: "Nov 24, 2025",
    items: 8,
    total: "£45.32",
    status: "Delivered",
  },
];

export const purchases: Purchases[] = [
  { url: "/public/Image.png", name: "Organic Bananas", count: 24 },
  { url: "/public/Image (1).png", name: "Fresh Milk", count: 18 },
  { url: "/public/Image (2).png", name: "Eggs", count: 15 },
  { url: "/public/Image (3).png", name: "Bread", count: 12 },
];
