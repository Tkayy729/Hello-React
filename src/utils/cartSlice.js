import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    removeItem: (state) => {
      state.items.pop();
    },
  },
});

export const { addItems, clearCart, removeItem } = carSlice.actions;
export const cartReducer = carSlice.reducer;
