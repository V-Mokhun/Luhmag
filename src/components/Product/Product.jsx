import React from "react";
import ProductContent from "./ProductContent/ProductContent";
import ProductImages from "./ProductImages/ProductImages";
import image from "../../assets/img/content/catalog-1.png";
import MyTitle from "../../ui/MyTitle";
import MyLoader from "../../ui/MyLoader";

const Product = ({ product }) => {
  if (!product.id) {
    return <MyLoader className={"product__loader"} />;
  }

  return (
    <section className="product">
      <div className="container">
        <div className="product__top">
          <MyTitle Component={"h1"} className={"product__title--mobile"}>
            {product.title}
          </MyTitle>
          <ProductImages />
          <ProductContent product={{ ...product, image }} />
        </div>
      </div>
    </section>
  );
};

export default Product;
