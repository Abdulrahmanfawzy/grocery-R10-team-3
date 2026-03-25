import type { Favorites, List } from "@/lib/types/smartList";

export const lists: List[] = [
  { name: "Weekly Essentials", img: "/Image (1).png", items: 24, updated: "Updated 2 days", color: "bg-blue-50 dark:bg-blue-950/30" },
  { name: "Stock Up", img: "/Image (2).png", items: 24, updated: "Updated 1 week", color: "bg-amber-50 dark:bg-amber-950/30" },
  { name: "Kids Snacks", img: "/Image (3).png", items: 12, updated: "Updated 3 days", color: "bg-pink-50 dark:bg-pink-950/30" },
  { name: "Organic Only", img: "/Small Image & Lable.png", items: 18, updated: "Updated 5 days", color: "bg-green-50 dark:bg-green-950/30" },
];

export const favorites: Favorites[] = [
  { name: "Organic Bananas", img: "/Image (1).png", price: "£20.9" },
  { name: "Fresh Milk – 1L", img: "/Image (2).png", price: "£12.7" },
  { name: "Eggs", img: "/Image (3).png", price: "£32.9" },
  { name: "Butter", img: "/Small Image & Lable.png", price: "£40.9" },
];