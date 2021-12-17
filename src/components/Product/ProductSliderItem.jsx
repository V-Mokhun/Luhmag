import React from "react";

const ProductSliderItem = ({ image }) => {
  return (
    <div className="product__slider-image">
      <img src={image} alt="" />
    </div>
  );
};

export default ProductSliderItem;
