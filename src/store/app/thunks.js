import { createAsyncThunk } from "@reduxjs/toolkit";
import { appApi } from "../../api";

export const fetchNews = createAsyncThunk(`app/news`, async () => {
  const response = await appApi.getNews();
  return response;
});

export const fetchOneNews = createAsyncThunk(`api/one-news`, async (newsId) => {
  const response = await appApi.getOneNews(newsId);
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

export const fetchOneSale = createAsyncThunk(`app/one-sale`, async (saleId) => {
  const response = await appApi.getOneSale(saleId);
  return response;
});

export const fetchWorkers = createAsyncThunk(`app/workers`, async () => {
  const response = await appApi.getWorkers();
  return response;
});

export const fetchProducts = createAsyncThunk(`app/products`, async () => {
  const response = await appApi.getProducts();
  return response;
});

export const fetchOneProduct = createAsyncThunk(
  `app/one-product`,
  async (productId) => {
    const response = await appApi.getOneProduct(productId);
    return response;
  }
);
