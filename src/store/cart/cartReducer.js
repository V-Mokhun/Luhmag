import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
  productsCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
