import React from "react";
import MyTitle from "../../ui/MyTitle";

const ProductContent = ({ name }) => {
  return (
    <div className="product__content">
      <MyTitle Component={"h2"} className={"product__title"}>
        {name}
      </MyTitle>

      <div className="product__actions"></div>
    </div>
  );
};

export default ProductContent;
