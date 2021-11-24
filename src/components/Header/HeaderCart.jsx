import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CART_ROUTE } from "../../routes/routes";
import cartImage from "../../assets/img/icons/cart.svg";

const HeaderCart = () => {
  const price = useSelector((state) => state.cart.price);
  const productsCount = useSelector((state) => state.cart.productsCount);

  return (
    <Link className="header__cart" to={CART_ROUTE}>
      <div className="header__cart-inner">
        <img src={cartImage} alt="Корзина" />
        <span className="header__cart-count">{productsCount}</span>
      </div>
      <span className="header__cart-price">{price} ₽</span>
    </Link>
  );
};

export default HeaderCart;
