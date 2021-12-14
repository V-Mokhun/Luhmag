import axios from "axios";

export const SERVER_URL = `http://localhost:5000/`;

export const $host = axios.create({
  baseURL: SERVER_URL,
});

export const appApi = {
  getNews() {
    return $host.get("news").then((resp) => {
      return resp.data;
    });
  },
  getOneNews(id) {
    return $host.get(`news/${id}`).then((resp) => {
      return resp.data;
    });
  },
  getReviews() {
    return $host.get("reviews").then((resp) => {
      return resp.data;
    });
  },
  getSales() {
    return $host.get("sales").then((resp) => {
      return resp.data;
    });
  },
  getOneSale(id) {
    return $host.get(`sales/${id}`).then((resp) => {
      return resp.data;
    });
  },
  getWorkers() {
    return $host.get("workers").then((resp) => {
      return resp.data;
    });
  },
  getProducts() {
    return $host.get("products").then((resp) => {
      return resp.data;
    });
  },
  getOneProduct(id) {
    return $host.get(`products/${id}`).then((resp) => {
      return resp.data;
    });
  },
};
