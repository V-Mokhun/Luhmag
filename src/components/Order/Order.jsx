import React from "react";
import OrderForm from "../../forms/OrderForm";
import MyTitle from "../../ui/MyTitle";

const Order = () => {
  return (
    <section className="order">
      <div className="container">
        <MyTitle Component={"h2"} className={"order__title"}>
          Или заполните форму заказа:
        </MyTitle>
        <span className="order__help">* Обязательные поля для заполнения</span>
        <div className="order__inner">
          <OrderForm className={"order__form"} />
        </div>
      </div>
    </section>
  );
};

export default Order;
