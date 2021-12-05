import React from "react";
import AboutPage from "../pages/AboutPage";
import Cart from "../pages/Cart";
import CatalogPage from "../pages/CatalogPage";
import ContactsPage from "../pages/ContactsPage";
import DeliveryPage from "../pages/DeliveryPage";
import NewsPage from "../pages/NewsPage";
import OneNewsPage from "../pages/OneNewsPage";
import SalesPage from "../pages/SalesPage";
import SalesItem from "../pages/SalesItem";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import ThankContact from "../pages/ThankContact";
import ThankOrder from "../pages/ThankOrder";
import {
  ABOUT_ROUTE,
  CART_ROUTE,
  CATALOG_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  HOME_ROUTE,
  ONE_NEWS_ROUTE,
  NEWS_ROUTE,
  PRODUCT_ITEM_ROUTE,
  SALES_ITEM_ROUTE,
  SALES_ROUTE,
  THANK_CONTACT_ROUTE,
  THANK_ORDER_ROUTE,
} from "./routes";

export const routes = [
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: CATALOG_ROUTE,
    Component: <CatalogPage />,
  },
  {
    path: PRODUCT_ITEM_ROUTE,
    Component: <ProductPage />,
  },
  {
    path: ABOUT_ROUTE,
    Component: <AboutPage />,
  },
  {
    path: CART_ROUTE,
    Component: <Cart />,
  },
  {
    path: CONTACTS_ROUTE,
    Component: <ContactsPage />,
  },
  {
    path: DELIVERY_ROUTE,
    Component: <DeliveryPage />,
  },
  {
    path: NEWS_ROUTE,
    Component: <NewsPage />,
  },
  {
    path: ONE_NEWS_ROUTE,
    Component: <OneNewsPage />,
  },
  {
    path: SALES_ROUTE,
    Component: <SalesPage />,
  },
  {
    path: SALES_ITEM_ROUTE,
    Component: <SalesItem />,
  },
  {
    path: THANK_CONTACT_ROUTE,
    Component: <ThankContact />,
  },
  {
    path: THANK_ORDER_ROUTE,
    Component: <ThankOrder />,
  },
];
