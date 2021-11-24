import React from "react";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../../routes/routes";
import logo from "../../assets/img/logo.png";
import HeaderCity from "./HeaderCity";
import { useSelector } from "react-redux";
import HeaderCart from "./HeaderCart";
import HeaderSocial from "./HeaderSocial";
import HeaderCall from "./HeaderCall";
import HeaderBurger from "./HeaderBurger";

const HeaderInfo = ({ className, isHeader, setMenuActive, menuActive }) => {
  const city = useSelector((state) => state.user.city);

  return (
    <div className={`${className ? className : ""} header__info`}>
      <Link className="header__logo" to={HOME_ROUTE}>
        <img src={logo} alt="Логотип сайта" />
      </Link>
      <HeaderCity city={city} />
      <div className="header__phones">
        <a href="tel:88005512330" className="header__phone">
          <span className="header__phone-name">Для всех регионов:</span>
          <span className="header__phone-value">8 (800) 551-23-30</span>
        </a>
        <a href="tel:89585815352" className="header__phone">
          <span className="header__phone-name">Для {city}:</span>
          <span className="header__phone-value">8 (958) 581-53-52</span>
        </a>
      </div>
      {isHeader ? <HeaderCart /> : <HeaderSocial />}
      <HeaderCall />
      {isHeader && (
        <HeaderBurger menuActive={menuActive} setMenuActive={setMenuActive} />
      )}
    </div>
  );
};

export default HeaderInfo;
