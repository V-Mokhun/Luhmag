import { createAsyncThunk } from "@reduxjs/toolkit";
import { appApi } from "../../http";

export const fetchNews = createAsyncThunk(`app/news`, async () => {
  const response = await appApi.getNews();
  return response;
});

export const fetchReviews = createAsyncThunk(`app/reviews`, async () => {
  const response = await appApi.getReviews();
  return response;
});

export const fetchSales = createAsyncThunk(`app/sales`, async () => {
  const response = await appApi.getSales();
  return response;
});

export const fetchWorkers = createAsyncThunk(`app/workers`, async () => {
  const response = await appApi.getWorkers();
  return response;
});
