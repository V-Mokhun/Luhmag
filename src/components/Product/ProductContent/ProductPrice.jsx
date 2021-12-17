import React from "react";
import MyCounter from "../../../ui/MyCounter";

const ProductPrice = ({ price, oldPrice, total, onIncrease, onDecrease }) => {
  return (
    <div className="product__price">
      <MyCounter
        className={"product__counter"}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        total={total}
      />
      {price != oldPrice && (
        <span className="product__price-old">{oldPrice} ₽</span>
      )}
      <span className="product__price-new">{price} ₽</span>
    </div>
  );
};

export default ProductPrice;
