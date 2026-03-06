import type { CartProduct, CartState } from "../types/cartStore";

export type { CartProduct, CartState };

export const initialState: CartState = {
  items: [
    {
      id: 1,
      name: "Premium Organic Orange - 1KG",
      price: 20,
      quantity: 1,
      outOfStock: false,
      image: "/src/assets/oranges.jpg",
    },
    {
      id: 2,
      name: "Sausage With Fat Balady",
      price: 400,
      quantity: 1,
      outOfStock: false,
      image: "/src/assets/sausage with fat balady.jpg",
    },
    {
      id: 3,
      name: "Zanaty White Eggs - 30Pieces",
      price: 189,
      quantity: 1,
      outOfStock: true,
      image: "/src/assets/zanaty eggs 30 pcs.jpg",
    },
    {
      id: 4,
      name: "COOKS - SALT - 400G",
      price: 12,
      quantity: 4,
      outOfStock: false,
      image: "/src/assets/cooks-salt.jpg",
    },
    {
      id: 5,
      name: "Diet Bread - 5 Pieces",
      price: 24.95,
      quantity: 2,
      outOfStock: false,
      image: "/src/assets/diet bread.jpg",
    },
    {
      id: 6,
      name: "Almarai Fresh Full Fat Milk - 1.5L",
      price: 78.5,
      quantity: 1,
      outOfStock: false,
      image: "/src/assets/almarai fresh full fat milk.jpg",
    },
    {
      id: 7,
      name: "El Arosa Loose Black Tea - 40 Gr",
      price: 10,
      quantity: 1,
      outOfStock: false,
      image: "/src/assets/el Arosa loose Black Tea.jpg",
    },
    {
      id: 8,
      name: "Italiano Pasta Spaghetti - 1Kg",
      price: 55,
      quantity: 1,
      outOfStock: false,
      image: "/src/assets/Italiano spaghetti pasta.jpg",
    },
  ],
};
