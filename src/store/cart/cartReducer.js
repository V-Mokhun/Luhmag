import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
  productsCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // state.productsCount = 0;
      // state.totalPrice = 0;
      // state.products = [];

      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.count++;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }

      state.productsCount++;
      state.totalPrice += action.payload.price;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
