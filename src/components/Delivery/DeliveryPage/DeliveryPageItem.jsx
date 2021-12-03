import React from "react";

const DeliveryPageItem = ({ children, image, label }) => {
  return (
    <li className="delivery-page__item">
      <div className="delivery-page__image" aria-hidden="true">
        <img src={image} alt="" />
      </div>
      <div className="delivery-page__label">{label}</div>
      <div className="delivery-page__description">{children}</div>
    </li>
  );
};

export default DeliveryPageItem;
