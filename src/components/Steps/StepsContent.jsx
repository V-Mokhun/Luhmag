import React, { useState } from "react";
import { useSelector } from "react-redux";
import MyTitle from "../../ui/MyTitle";
import checkIcon from "../../assets/img/icons/check-big-white.svg";
import MyButton from "../../ui/MyButton";
import CallModal from "../../modals/CallModal/CallModal";

const StepsContent = () => {
  const [modal, setModal] = useState(false);
  const city = useSelector((state) => state.user.city);

  return (
    <div className="steps__content">
      <MyTitle Component="h2" className="steps__title">
        Как сделать заказ?
      </MyTitle>
      <ul className="steps__list">
        <li className="steps__item">
          <span className="steps__count">01</span>
          <p className="steps__description">Звонок</p>
        </li>
        <li className="steps__item">
          <span className="steps__count">02</span>
          <p className="steps__description">Консультация</p>
        </li>
        <li className="steps__item">
          <span className="steps__count">03</span>
          <p className="steps__description">Оформление заказа</p>
        </li>
        <li className="steps__item">
          <span className="steps__count">04</span>
          <p className="steps__description">Самовывоз в {city}</p>
        </li>
        <li className="steps__item steps__item--final">
          <div className="steps__icon" aria-hidden="true">
            <img src={checkIcon} alt="" />
          </div>
          <p className="steps__description">Оплата при получении</p>
        </li>
        <li className="steps__item steps__item--button">
          <MyButton className="steps__button" onClick={() => setModal(true)}>
            Получить консультацию
          </MyButton>
        </li>
      </ul>
      <CallModal show={modal} close={() => setModal(false)} />
    </div>
  );
};

export default StepsContent;
