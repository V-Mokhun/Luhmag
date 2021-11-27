import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.products.push(action.payload);
      state.totalPrice += action.payload.price;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
