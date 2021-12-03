import React from "react";
import MyTitle from "../../../ui/MyTitle";
import DeliveryPageTabs from "./DeliveryPageTabs";

const DeliveryPageContent = () => {
  return (
    <section className="delivery-page">
      <div className="container">
        <MyTitle Component="h2" className="delivery-page__title">
          Доставка и оплата
        </MyTitle>
        <div className="delivery-page__inner">
          <DeliveryPageTabs />
        </div>
      </div>
    </section>
  );
};

export default DeliveryPageContent;
