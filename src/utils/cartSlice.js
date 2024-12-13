import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (store, action) => {
      store.items.push(action.payload);
    },
    removeItem: (store) => {
      store.items.pop();
    },
    clearItems: (store) => {
      store.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
