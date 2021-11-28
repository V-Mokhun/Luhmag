import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "Москва",
  name: "",
  phone: "",
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
    setOrderPrice: (state, action) => {
      state.orderPrice = action.payload;
    },
  },
});

export const { setCity, setName, setPhone, setOrderPrice} = userSlice.actions;

export default userSlice.reducer;
