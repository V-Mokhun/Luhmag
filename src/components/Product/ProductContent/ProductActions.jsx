import React from "react";
import MyButton from "../../../ui/MyButton";

const ProductActions = ({ onBuy, onOrder }) => {
  return (
    <>
      <div className="product__actions">
        <MyButton onClick={onBuy} className={"product__buy product__button"}>
          <span>В корзину</span>
        </MyButton>
        <MyButton
          onClick={onOrder}
          className={"product__order product__button"}
        >
          Быстрый заказ
        </MyButton>
      </div>
    </>
  );
};

export default ProductActions;
