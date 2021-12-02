import React from "react";
import { Link } from "react-router-dom";
import { DELIVERY_ROUTE } from "../../routes/routes";

const DeliveryItem = ({ image, title, description, children }) => {
  return (
    <li className="delivery__item">
      <div className="delivery__image" aria-hidden="true">
        <img src={image} alt={title} />
      </div>
      <div className="delivery__name">{title}</div>
      <p className="delivery__description">{description}</p>
      <div className="delivery__link-wrapper">
        {!children ? (
          <Link className="delivery__link" to={DELIVERY_ROUTE}>
            Подробнее
          </Link>
        ) : (
          children
        )}
      </div>
    </li>
  );
};

export default DeliveryItem;
