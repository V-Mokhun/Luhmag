import React from "react";
import { Link } from "react-router-dom";
import { CART_ROUTE } from "../../routes/routes";
import MyButton from "../../ui/MyButton";
import MyTitle from "../../ui/MyTitle";
import Modal from "../Modal";

const CatalogThankModal = ({ count, totalPrice, close, ...props }) => {
  return (
    <Modal className="catalog-thank-modal icon" close={close} {...props}>
      <MyTitle Component="h3" className="catalog-thank-modal__title">
        Товар добавлен в корзину
      </MyTitle>
      <p className="catalog-thank-modal__description">
        в корзине {count} товаров <span>на сумму {totalPrice} ₽</span>
      </p>
      <div className="catalog-thank-modal__actions">
        <MyButton
          Component={Link}
          to={CART_ROUTE}
          className="catalog-thank-modal__link"
        >
          Перейти в корзину
        </MyButton>
        <MyButton
          className="catalog-thank-modal__button button--secondary"
          type="button"
          onClick={() => close()}
        >
          Вернуться к выбору товара
        </MyButton>
      </div>
    </Modal>
  );
};

export default CatalogThankModal;
