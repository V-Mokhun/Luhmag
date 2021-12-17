import React from "react";
import { useSelector } from "react-redux";
import geoIcon from "../../../assets/img/icons/geo-big.svg";
import walletIcon from "../../../assets/img/icons/wallet.svg";
import shareIcon from "../../../assets/img/icons/share.svg";
import vkIcon from "../../../assets/img/icons/vk.svg";
import facebookIcon from "../../../assets/img/icons/facebook.svg";
import twitterIcon from "../../../assets/img/icons/twitter.svg";
import classmatesIcon from "../../../assets/img/icons/classmates.svg";

const ProductInfo = () => {
  const city = useSelector((state) => state.user.city);

  return (
    <ul className="product__info info-product">
      <li className="info-product__item">
        <div aria-hidden={true} className="info-product__image">
          <img src={geoIcon} alt="" />
        </div>
        <div className="info-product__title">В наличии:</div>
        <p className="info-product__description">
          <span>г. {city}</span>
          <span>ул. Ленинградская, 100</span>
        </p>
      </li>
      <li className="info-product__item">
        <div aria-hidden={true} className="info-product__image">
          <img src={walletIcon} alt="" />
        </div>
        <div className="info-product__title">Способы оплаты:</div>
        <ul className="info-product__list">
          <li className="info-product__list-item">Оплата при получении</li>
          <li className="info-product__list-item">Безналичный расчет</li>
          <li className="info-product__list-item">По счету для юр. лиц</li>
        </ul>
      </li>
      <li className="info-product__item">
        <div aria-hidden={true} className="info-product__image">
          <img src={shareIcon} alt="" />
        </div>
        <div className="info-product__title">Поделиться:</div>
        <ul className="info-product__social">
          <li className="info-product__social-item">
            <a
              className="info-product__social-link"
              aria-label="Вконтакте"
              href="https://vk.com"
            >
              <img src={vkIcon} alt="" />
            </a>
          </li>
          <li className="info-product__social-item">
            <a
              className="info-product__social-link"
              aria-label="Фейсбук"
              href="https://facebook.com"
            >
              <img src={facebookIcon} alt="" />
            </a>
          </li>
          <li className="info-product__social-item">
            <a
              className="info-product__social-link"
              aria-label="Твиттер"
              href="https://twitter.com"
            >
              <img src={twitterIcon} alt="" />
            </a>
          </li>
          <li className="info-product__social-item">
            <a
              className="info-product__social-link"
              aria-label="Одноклассники"
              href="https://ok.ru"
            >
              <img src={classmatesIcon} alt="" />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default ProductInfo;
