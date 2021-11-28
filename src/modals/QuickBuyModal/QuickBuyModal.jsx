import React, { useState } from "react";
import ContactForm from "../../forms/ContactForm";
import MyCounter from "../../ui/MyCounter";
import MyTitle from "../../ui/MyTitle";
import Modal from "../Modal";

const QuickBuyModal = ({ product, close, ...props }) => {
  const { image, title: name, price } = product;
  const [count, setCount] = useState(1);
  const totalPrice = count * price;

  return (
    <Modal
      className="quick-buy-modal icon contact-icon"
      close={close}
      {...props}
    >
      <MyTitle Component="h3" className="quick-buy-modal__title">
        Купить товар в 1 клик
      </MyTitle>
      <p className="quick-buy-modal__description">
        Сделайте заказ и наш менеджер свяжется с Вами
        <span> в течение 3 минут</span>
      </p>
      <div className="quick-buy-modal__product">
        <div className="quick-buy-modal__image">
          <img src={image} alt={name} />
        </div>
        <h4 className="quick-buy-modal__name">{name}</h4>
        <MyCounter
          className="quick-buy-modal__counter"
          total={count}
          onDecrease={() => {
            if (count <= 1) setCount(1);
            else setCount((count) => (count -= 1));
          }}
          onIncrease={() => setCount((count) => (count += 1))}
        ></MyCounter>
        <div className="quick-buy-modal__price">{totalPrice}₽</div>
      </div>
      <ContactForm
        className="quick-buy-modal__form"
        closeModal={() => {
          setCount(1);
          close();
        }}
        buttonText="Отправить"
      />
    </Modal>
  );
};

export default QuickBuyModal;
