import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "Москва",
  name: "",
  phone: "",
  email: "",
  orderPrice: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setOrderPrice: (state, action) => {
      state.orderPrice = action.payload;
    },
  },
});

export const { setCity, setName, setPhone, setEmail, setOrderPrice } =
  userSlice.actions;

export default userSlice.reducer;
