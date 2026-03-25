import type { Benefits, Coupons, Tiers } from "@/lib/types/loyalty";
import { Gift, Headphones, Star, Tag } from "lucide-react";

export const tiers: Tiers[] = [
  { label: "Bronze", pts: "1000 pts", active: false },
  { label: "Silver", pts: "2500 pts", active: false },
  { label: "Gold", pts: "5000 pts", active: true },
  { label: "Platinum", pts: "1000 pts", active: false },
];

export const benefits: Benefits[] = [
  { icon: Star, label: "2x Points", desc: "Earn double points on all purchases" },
  { icon: Gift, label: "Birthday Bonus", desc: "500 bonus points on your birthday" },
  { icon: Tag, label: "Exclusive Deals", desc: "Access to member-only promotions" },
  { icon: Headphones, label: "Priority Support", desc: "Faster customer service response" },
];

export const coupons: Coupons[] = [
  { title: "15% off", code: "SAVE15", desc: "Min. order $50 • Expires: Dec 31, 2025" },
  { title: "Free Delivery", code: "FREESHIP", desc: "Expires: Dec 15, 2025" },
  { title: "£10 off Organic", code: "ORGANIC10", desc: "Min. order $30 • Expires: Jan 15, 2026" },
];