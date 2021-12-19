import React from "react";
import { useCallback } from "react";
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
  // console.log("render CART")
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const onProductIncrease = useCallback((id) => {
    dispatch(increaseCount(id));
  }, []);

  const onProductDecrease = useCallback((id) => {
    dispatch(decreaseCount(id));
  }, []);

  const onProductDelete = useCallback((id) => {
    dispatch(removeFromCart(id));
  }, []);

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
                    onIncrease={() => onProductIncrease(product.id)}
                    onDecrease={() => onProductDecrease(product.id)}
                    onDelete={() => onProductDelete(product.id)}
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
