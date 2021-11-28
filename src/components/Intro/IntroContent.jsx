import React from "react";
import { useSelector } from "react-redux";

const IntroContent = () => {
  const city = useSelector((state) => state.user.city);

  return (
    <>
      <h1 className="intro__title">
        <span> Слуховые аппараты </span> от 690₽
      </h1>
      <ul className="intro__list">
        <li className="intro__item">В наличии в {city}</li>
        <li className="intro__item">Получение в день оформления заказа</li>
      </ul>
    </>
  );
};

export default IntroContent;
