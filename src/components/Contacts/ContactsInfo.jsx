import React from "react";
import MyTitle from "../../ui/MyTitle";
import mailIcon from "../../assets/img/icons/email.svg";
import phoneIcon from "../../assets/img/icons/phone.svg";
import geoIcon from "../../assets/img/icons/geo.svg";
import timeIcon from "../../assets/img/icons/time.svg";
import { useSelector } from "react-redux";

const ContactsInfo = () => {
  const city = useSelector((state) => state.user.city);

  return (
    <div className="contacts__info info-contacts">
      <MyTitle Component="h2" className="info-contacts__title">
        Контакты
      </MyTitle>
      <ul className="info-contacts__list">
        <li className="info-contacts__item">
          <div className="info-contacts__icon" aria-label="почта">
            <img aria-hidden="true" src={mailIcon} alt="" />
          </div>
          <div className="info-contacts__description">
            <a href="mailto:info@sluhmag.ru">info@sluhmag.ru</a>
          </div>
        </li>
        <li className="info-contacts__item">
          <div className="info-contacts__icon" aria-label="телефон">
            <img aria-hidden="true" src={phoneIcon} alt="" />
          </div>
          <div className="info-contacts__description">
            <a href="tel:89585815352">8 (958) 581-53-52</a>
          </div>
        </li>
        <li className="info-contacts__item">
          <div className="info-contacts__icon" aria-label="расположение">
            <img aria-hidden="true" src={geoIcon} alt="" />
          </div>
          <div className="info-contacts__description">
            <p>г.{city}</p>
            <p>ул. Ленинградская, 100</p>
          </div>
        </li>
        <li className="info-contacts__item">
          <div className="info-contacts__icon" aria-label="время работы">
            <img aria-hidden="true" src={timeIcon} alt="" />
          </div>
          <div className="info-contacts__description">
            <p>
              Пн - Пт:
              <span>
                10<sup>00</sup> - 19<sup>00</sup>
              </span>
            </p>
            <p>
              Сб:
              <span>
                10<sup>00</sup> - 16<sup>00</sup>
              </span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactsInfo;
