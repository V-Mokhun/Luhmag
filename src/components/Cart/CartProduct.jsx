import React from "react";
import { Link } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../routes/routes";
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
  const { image, title, id } = product;

  return (
    <div
      className={`cart-product ${className ? className : ""} ${
        noDelete ? "cart-product--delete" : ""
      }`}
    >
      <div className="cart-product__image">
        <img src={image} alt={title} />
      </div>
      <Link to={`${PRODUCT_ROUTE}/${id}`} className="cart-product__name">
        {title}
      </Link>
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
