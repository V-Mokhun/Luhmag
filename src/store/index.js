import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
