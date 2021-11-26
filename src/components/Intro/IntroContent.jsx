import React from "react";
import { useSelector } from "react-redux";
import ContactForm from "../../forms/ContactForm";

const IntroContent = () => {
  const city = useSelector((state) => state.user.city);

  return (
    <div className="intro__content">
      <h1 className="intro__title">
        <span> Слуховые аппараты </span> от 690₽
      </h1>
      <ul className="intro__list">
        <li className="intro__item">В наличии в {city}</li>
        <li className="intro__item">Получение в день оформления заказа</li>
      </ul>
      <ContactForm className="intro__form" buttonText="Получить консультацию" />
    </div>
  );
};

export default IntroContent;
