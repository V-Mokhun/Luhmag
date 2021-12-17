import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyTitle from "../../../ui/MyTitle";
import ProductActions from "./ProductActions";
import ProductPrice from "./ProductPrice";
import QuickBuyModal from "../../../modals/QuickBuyModal/QuickBuyModal";
import CatalogThankModal from "../../../modals/CatalogThankModal/CatalogThankModal";
import { addToCart } from "../../../store/cart/cartReducer";
import { useCallback } from "react";
import ProductInfo from "./ProductInfo";

const ProductContent = ({ product }) => {
  const [count, setCount] = useState(1);
  const [buyModal, setBuyModal] = useState(false);
  const [thankModal, setThankModal] = useState(false);

  const onIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const onDecrease = useCallback(() => {
    if (count <= 1) return;
    setCount((prev) => prev - 1);
  }, [count]);

  const { title, price, image, oldPrice, id } = product;
  const dispatch = useDispatch();

  const productsCount = useSelector((state) => state.cart.productsCount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      <div className="product__content">
        <MyTitle Component={"h1"} className={"product__title"}>
          {title}
        </MyTitle>
        <ProductPrice
          oldPrice={oldPrice * count}
          price={price * count}
          total={count}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />
        <ProductActions
          onBuy={() => {
            dispatch(
              addToCart({
                id,
                title,
                image,
                price,
                count,
              })
            );
            setThankModal(true);
          }}
          onOrder={() => setBuyModal(true)}
        />
        <ProductInfo />
      </div>
      <QuickBuyModal
        show={buyModal}
        close={() => setBuyModal(false)}
        product={{ title, price, image }}
      />
      <CatalogThankModal
        show={thankModal}
        close={() => setThankModal(false)}
        count={productsCount}
        totalPrice={totalPrice}
      />
    </>
  );
};

export default ProductContent;
