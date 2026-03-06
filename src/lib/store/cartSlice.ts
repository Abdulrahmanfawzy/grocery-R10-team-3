import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../constants/mocData";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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

export const { incrementQty, decrementQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
