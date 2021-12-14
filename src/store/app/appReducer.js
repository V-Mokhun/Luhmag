import { createSlice } from "@reduxjs/toolkit";
import {
  fetchNews,
  fetchProducts,
  fetchReviews,
  fetchSales,
  fetchWorkers,
} from "./thunks";

const initialState = {
  reviews: [],
  news: [],
  sales: [],
  workers: [],
  products: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
    builder.addCase(fetchSales.fulfilled, (state, action) => {
      state.sales = action.payload;
    });
    builder.addCase(fetchWorkers.fulfilled, (state, action) => {
      state.workers = action.payload;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default appSlice.reducer;
