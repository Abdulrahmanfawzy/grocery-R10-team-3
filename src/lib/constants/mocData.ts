import type { CartItemType } from "../types/cart";

export const cartItems: CartItemType[] = [
  {
    name: "Premium Organic Orange - 1KG",
    price: 20,
    quantity: 1,
    outOfStock: false,
    image: "/src/assets/cart1.png",
  },
  {
    name: "Sausage With Fat Balady",
    price: 400,
    quantity: 1,
    outOfStock: false,
    image: "/src/assets/cart2.png",
  },
  {
    name: "COOKS - SALT - 400G",
    price: 12,
    quantity: 4,
    outOfStock: false,
    image: "/src/assets/cart3.png",
  },
  {
    name: "Zanaty White Eggs - 30Pieces",
    price: 189,
    quantity: 1,
    outOfStock: true,
    image: "/src/assets/cart4.png",
  },
];
