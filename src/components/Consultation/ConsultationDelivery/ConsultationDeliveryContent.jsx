import React from "react";
import MyTitle from "../../../ui/MyTitle";

const ConsultationDeliveryContent = () => {
  return (
    <>
      <MyTitle
        className="consultation__title delivery-consultation__title"
        Component="h2"
      >
        Вы можете забрать заказ <span> самостоятельно в день заказа, через 15 минут после его оформления.</span>
      </MyTitle>
      <p className="consultation__description delivery-consultation__description">
        Просто заполните форму.
      </p>
    </>
  );
};

export default ConsultationDeliveryContent;
