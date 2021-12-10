import React from "react";
import MyTitle from "../../ui/MyTitle";
import Call from "./Call";
import image from "../../assets/img/icons/phone.svg";

const OrderCall = () => {
  return (
    <Call className={"order-call"}>
      <MyTitle Component={"h2"} className={"call__title order-call__title"}>
        Чтобы оформить заказ:
      </MyTitle>
      <div className="call__content order-call__content">
        <div aria-hidden="true" className="call__image order-call__image">
          <img src={image} alt="" />
        </div>
        <p className="call__description order-call__description">
          Свяжитесь с нами по бесплатному номеру
          <a href="tel:88005512330">8 800 551 23 30</a>
        </p>
      </div>
    </Call>
  );
};

export default OrderCall;
