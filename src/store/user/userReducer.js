import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "Москва",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setCity } = userSlice.actions;

export default userSlice.reducer;
