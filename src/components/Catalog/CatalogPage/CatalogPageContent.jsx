import React from "react";
import MyTitle from "../../../ui/MyTitle";
import CatalogPageFilter from "./CatalogPageFilter";
import CatalogPageProducts from "./CatalogPageProducts";

const CatalogPageContent = () => {
  return (
    <section className="catalog-page__content">
      <div className="container">
        <MyTitle Component={"h1"} className={"catalog-page__title"}>
          Каталог
        </MyTitle>
        <CatalogPageFilter />
        <CatalogPageProducts />
      </div>
    </section>
  );
};

export default CatalogPageContent;
