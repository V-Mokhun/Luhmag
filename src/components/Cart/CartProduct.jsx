import React from "react";
import MyCounter from "../../ui/MyCounter";

const CartProduct = ({
  className,
  product,
  onDecrease,
  onIncrease,
  onDelete,
  totalPrice,
  total,
  noDelete,
}) => {
  const { image, title: name } = product;

  return (
    <div className={`cart-product ${className ? className : ""}`}>
      <div className="cart-product__image">
        <img src={image} alt={name} />
      </div>
      <h4 className="cart-product__name">{name}</h4>
      <MyCounter
        className="cart-product__counter"
        total={total}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
      />
      <div className="cart-product__price">{totalPrice} ₽</div>
      {!noDelete && (
        <button
          type="button"
          onClick={onDelete}
          className="cart-product__delete"
        />
      )}
    </div>
  );
};

export default CartProduct;
