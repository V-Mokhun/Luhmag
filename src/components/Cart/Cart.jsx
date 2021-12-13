import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CATALOG_ROUTE } from "../../routes/routes";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "../../store/cart/cartReducer";
import MyButton from "../../ui/MyButton";
import MyTitle from "../../ui/MyTitle";
import CartProduct from "./CartProduct";

const Cart = ({ hasProducts }) => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <section className="cart">
      <div className="container">
        <MyTitle Component={"h1"} className={"cart__title"}>
          Корзина
        </MyTitle>
        <div className="cart__inner">
          {hasProducts ? (
            <>
              <ul className="cart__list">
                {products.map((product) => (
                  <CartProduct
                    key={product.id}
                    product={product}
                    total={product.count}
                    totalPrice={product.price * product.count}
                    onIncrease={() => dispatch(increaseCount(product.id))}
                    onDecrease={() => dispatch(decreaseCount(product.id))}
                    onDelete={() => dispatch(removeFromCart(product.id))}
                  />
                ))}
              </ul>
              <p className="cart__summary">
                Итого: <span>{totalPrice} ₽</span>
              </p>
            </>
          ) : (
            <>
              <span className="cart__info">в корзине 0 товаров</span>
              <div className="cart__button-wrapper">
                <MyButton
                  className={"cart__button"}
                  Component={Link}
                  to={CATALOG_ROUTE}
                >
                  В каталог
                </MyButton>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
