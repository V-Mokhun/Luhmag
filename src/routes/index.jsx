import Article from "../pages/Article";
import ArticleItem from "../pages/ArticleItem";
import React from "react";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import Contacts from "../pages/Contacts";
import Delivery from "../pages/Delivery";
import News from "../pages/News";
import NewsItem from "../pages/NewsItem";
import Sales from "../pages/Sales";
import SalesItem from "../pages/SalesItem";
import Thank from "../pages/Thank";
import Home from "../pages/Home";
import {
  ABOUT_ROUTE,
  ARTICLE_ITEM_ROUTE,
  ARTICLE_ROUTE,
  CART_ROUTE,
  CATALOG_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  HOME_ROUTE,
  NEWS_ITEM_ROUTE,
  NEWS_ROUTE,
  SALES_ITEM_ROUTE,
  SALES_ROUTE,
  THANK_ROUTE,
} from "./routes";

export const routes = [
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: CATALOG_ROUTE,
    Component: <Catalog />,
  },
  {
    path: ABOUT_ROUTE,
    Component: <About />,
  },
  {
    path: CART_ROUTE,
    Component: <Cart />,
  },
  {
    path: CONTACTS_ROUTE,
    Component: <Contacts />,
  },
  {
    path: DELIVERY_ROUTE,
    Component: <Delivery />,
  },
  {
    path: NEWS_ROUTE,
    Component: <News />,
  },
  {
    path: NEWS_ITEM_ROUTE,
    Component: <NewsItem />,
  },
  {
    path: SALES_ROUTE,
    Component: <Sales />,
  },
  {
    path: SALES_ITEM_ROUTE,
    Component: <SalesItem />,
  },
  {
    path: ARTICLE_ROUTE,
    Component: <Article />,
  },
  {
    path: ARTICLE_ITEM_ROUTE,
    Component: <ArticleItem />,
  },
  {
    path: THANK_ROUTE,
    Component: <Thank />,
  },
];