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

      if (item && action.payload.count) {
        item.count += action.payload.count;
      } else if (item) {
        item.count++;
      } else {
        state.products.push({ count: 1, ...action.payload });
      }

      if (action.payload.count) {
        state.productsCount += action.payload.count;
        state.totalPrice += action.payload.price * action.payload.count;
      } else {
        state.productsCount++;
        state.totalPrice += action.payload.price;
      }
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
    clearCart(state) {
      state.products = [];
      state.totalPrice = 0;
      state.productsCount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
