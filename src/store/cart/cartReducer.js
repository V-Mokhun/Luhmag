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
      const item = state.products.find((item) => item.id == action.payload.id);

      if (item) {
        item.count++;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }

      state.productsCount++;
      state.totalPrice += action.payload.price;
    },
    removeFromCart(state, action) {
      const item = state.products.find((item) => item.id == action.payload);
      const itemCount = item.count;
      const itemPrice = item.price;

      state.products = state.products.filter(
        (item) => item.id != action.payload
      );

      state.productsCount -= itemCount;
      state.totalPrice -= itemCount * itemPrice;
    },
    increaseCount(state, action) {
      const item = state.products.find((item) => item.id == action.payload);
      item.count += 1;
      state.productsCount++;
      state.totalPrice += item.price;
    },
    decreaseCount(state, action) {
      const item = state.products.find((item) => item.id == action.payload);

      if (item.count <= 1) {
        return;
      } else {
        item.count -= 1;
        state.productsCount--;
        state.totalPrice -= item.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseCount, decreaseCount } =
  cartSlice.actions;

export default cartSlice.reducer;
