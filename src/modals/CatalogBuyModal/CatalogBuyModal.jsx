import React, { useState } from "react";
import ContactForm from "../../forms/ContactForm";
import MyCounter from "../../ui/MyCounter";
import MyTitle from "../../ui/MyTitle";
import Modal from "../Modal";

const CatalogThankModal = ({ product, close, ...props }) => {
  const { image, title: name, price } = product;
  const [count, setCount] = useState(1);
  const totalPrice = count * price;

  return (
    <Modal
      className="catalog-buy-modal icon contact-icon"
      close={close}
      {...props}
    >
      <MyTitle Component="h3" className="catalog-buy-modal__title">
        Купить товар в 1 клик
      </MyTitle>
      <p className="catalog-buy-modal__description">
        Сделайте заказ и наш менеджер свяжется с Вами
        <span> в течение 3 минут</span>
      </p>
      <div className="catalog-buy-modal__product">
        <div className="catalog-buy-modal__image">
          <img src={image} alt={name} />
        </div>
        <h4 className="catalog-buy-modal__name">{name}</h4>
        <MyCounter
          className="catalog-buy-modal__counter"
          total={count}
          onDecrease={() => {
            if (count <= 1) setCount(1);
            else setCount((count) => (count -= 1));
          }}
          onIncrease={() => setCount((count) => (count += 1))}
        ></MyCounter>
        <div className="catalog-buy-modal__price">{totalPrice}₽</div>
      </div>
      <ContactForm
        className="catalog-buy-modal__form"
        closeModal={() => {
          setCount(1);
          close();
        }}
        buttonText="Отправить"
      />
    </Modal>
  );
};

export default CatalogThankModal;
