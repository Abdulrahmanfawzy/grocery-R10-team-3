import type { OrderHistory } from "@/lib/types/orderHistory";

export const ordersHistory: OrderHistory[] = [
  {
    id: "#GP001",
    date: "Nov 24, 2025",
    items: 6,
    status: "Completed",
    products: [
      { image: "/public/Small Image & Lable.png", name: "Prem ... Orange", quantity: 1 },
      { image: "/public/Image.png", name: "Prem ... Banana", quantity: 1 },
    ],
    moreCount: 4,
    total: "£250.",
  },
  {
    id: "#GP002",
    date: "Nov 20, 2025",
    items: 8,
    status: "Completed",
    products: [
      { image: "/public/Image (2).png", name: "Eggs", quantity: 1 },
      { image: "/public/Image (1).png", name: "Milk", quantity: 2 },
    ],
    moreCount: 6,
    total: "£450.",
  },
];
