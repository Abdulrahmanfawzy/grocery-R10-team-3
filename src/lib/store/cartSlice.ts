import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartProduct } from "../types/cartStore";

const initialState: { items: CartProduct[] } = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartProduct[]>) => {
      state.items = action.payload;
    },
    incrementQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { setCartItems, incrementQty, decrementQty, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
