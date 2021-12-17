import React from "react";
import ProductContent from "./ProductContent";
import ProductImages from "./ProductImages";

const Product = ({ product }) => {
  return (
    <section className="product">
      <div className="container">
        <div className="product__inner">
          <ProductImages />
          <ProductContent name={product.title} />
        </div>
      </div>
    </section>
  );
};

export default Product;
