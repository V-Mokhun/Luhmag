import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_ROUTE,
  ARTICLE_ROUTE,
  CATALOG_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
  SALES_ROUTE,
} from "../routes/routes";

const Menu = ({ className }) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <nav className={`${className} menu`}>
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link" to={HOME_ROUTE}>
            Главная
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to={CATALOG_ROUTE}>
            Каталог
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to={DELIVERY_ROUTE}>
            Доставка и оплата
          </Link>
        </li>
        <li className="menu__item">
          <a
            className={`menu__link dropdown-link ${
              dropdownActive ? "active" : ""
            }`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setDropdownActive((state) => !state);
            }}
          >
            Полезная информация
          </a>
          <ul className={`menu__sublist ${!dropdownActive ? "hidden" : ""}`}>
            <li className="menu__subitem">
              <Link className="menu__link menu__sublink" to={SALES_ROUTE}>
                Акции
              </Link>
            </li>
            <li className="menu__subitem">
              <Link className="menu__link menu__sublink" to={NEWS_ROUTE}>
                Новости
              </Link>
            </li>
            <li className="menu__subitem">
              <Link className="menu__link menu__sublink" to={ARTICLE_ROUTE}>
                Статьи
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to={ABOUT_ROUTE}>
            О компании
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to={CONTACTS_ROUTE}>
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
