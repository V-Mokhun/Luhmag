import React from "react";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../../routes/routes";
import MyButton from "../../ui/MyButton";

const ThankContent = ({ isContact, city, name, phone, orderPrice }) => {
  return (
    <div className="thank__content">
      <ul className="thank__list">
        <li className="thank__item thank__item--contact">
          <p>
            <span>{name}</span>, спасибо что выбрали наш интернет-магазин! В
            ближайшее время мы свяжемся с Вами по телефону:
            <span> {phone}</span>
          </p>
        </li>
        {!isContact && (
          <>
            <li className="thank__item thank__item--location">
              <p>
                Заказ можно забрать в пункте выдачи заказов: г.{city} ул.
                Ленинградская, 100
              </p>
            </li>
            <li className="thank__item thank__item--summary">
              <p>
                Итого:
                <span className="thank__price">{orderPrice} ₽</span>
              </p>
              <p>Будем рады видеть Вас снова!</p>
            </li>
          </>
        )}
      </ul>
      <div className="thank__button-wrapper">
        <MyButton
          Component={Link}
          to={HOME_ROUTE}
          className="thank__button button--secondary"
        >
          Вернуться на сайт
        </MyButton>
      </div>
    </div>
  );
};

export default ThankContent;
