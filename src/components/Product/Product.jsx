import React from "react";
import ProductContent from "./ProductContent/ProductContent";
import ProductImages from "./ProductImages/ProductImages";
import image from "../../assets/img/content/catalog-1.png";
import MyTitle from "../../ui/MyTitle";
import MyLoader from "../../ui/MyLoader";
import ProductTabs from "./ProductTabs/ProductTabs";
import Waves from "../Waves/Waves";

const Product = ({ product }) => {
  if (!product.id) {
    return <MyLoader className={"product__loader"} />;
  }

  return (
    <section className="product">
      <Waves className={"product__waves"} />
      <div className="container">
        <div className="product__top">
          <MyTitle Component={"h1"} className={"product__title--mobile"}>
            {product.title}
          </MyTitle>
          <ProductImages />
          <ProductContent product={{ ...product, image }} />
        </div>
        <div className="product__bottom">
          <ProductTabs
            description={product.description}
            characteristics={product.characteristics}
            reviews={product.reviews}
            questions={product.questions}
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
