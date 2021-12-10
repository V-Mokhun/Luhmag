import React from "react";
import MyTitle from "../../ui/MyTitle";
import geoIcon from "../../assets/img/icons/geo-big.svg";
import emailIcon from "../../assets/img/icons/email.svg";
import timeIcon from "../../assets/img/icons/time.svg";
import headphonesIcon from "../../assets/img/icons/headphones.svg";
import { useSelector } from "react-redux";

const ContactsAbout = () => {
  const city = useSelector((state) => state.user.city);

  return (
    <section className="contacts-about">
      <div className="container">
        <MyTitle Component={"h1"} className={"contacts-about__title"}>
          Контакты
        </MyTitle>
        <ul className="contacts-about__list">
          <li className="contacts-about__item">
            <div aria-hidden="true" className="contacts-about__image">
              <img src={geoIcon} alt="" />
            </div>
            <div className="contacts-about__label">Адрес</div>
            <p className="contacts-about__description">
              г. {city} ул. Ленинградская, 100
            </p>
          </li>
          <li className="contacts-about__item">
            <div aria-hidden="true" className="contacts-about__image">
              <img src={emailIcon} alt="" />
            </div>
            <div className="contacts-about__label">Email</div>
            <p className="contacts-about__description">
              <a href="mailto:info@bez-signala.ru ">info@bez-signala.ru </a>
            </p>
          </li>
          <li className="contacts-about__item">
            <div aria-hidden="true" className="contacts-about__image">
              <img src={timeIcon} alt="" />
            </div>
            <div className="contacts-about__label">Режим работы</div>
            <p className="contacts-about__description">
              <span>Пн - Пт: 10:00-19:00</span>
              <span>Сб: 10:00-16:00</span>
            </p>
          </li>
          <li className="contacts-about__item">
            <div aria-hidden="true" className="contacts-about__image">
              <img src={headphonesIcon} alt="" />
            </div>
            <div className="contacts-about__label">Городской номер</div>
            <p className="contacts-about__description">
              <a href="tel:89585815352">8 (958) 581-53-52</a>
            </p>
          </li>
          <li className="contacts-about__item">
            <div aria-hidden="true" className="contacts-about__image">
              <img src={headphonesIcon} alt="" />
            </div>
            <div className="contacts-about__label">
              Бесплатный федеральный номер
            </div>
            <p className="contacts-about__description">
              <a href="tel:88005512330">8 (800) 551-23-30</a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactsAbout;
