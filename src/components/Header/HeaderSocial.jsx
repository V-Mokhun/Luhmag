import React from "react";
import instagramIcon from "../../assets/img/icons/instagram.svg";
import vkIcon from "../../assets/img/icons/vk.svg";
import facebookIcon from "../../assets/img/icons/facebook.svg";

const HeaderSocial = () => {
  return (
    <ul className="header__social">
      <li className="header__social-item">
        <a
          aria-label="Инстаграм компании"
          className="header__social-link"
          href="#"
        >
          <img aria-hidden="true" src={instagramIcon} alt="Инстаграм" />
        </a>
      </li>
      <li className="header__social-item">
        <a
          aria-label="Вконтакте компании"
          className="header__social-link"
          href="#"
        >
          <img aria-hidden="true" src={vkIcon} alt="Вконтакте" />
        </a>
      </li>
      <li className="header__social-item">
        <a
          aria-label="Фейсбук компании"
          className="header__social-link"
          href="#"
        >
          <img aria-hidden="true" src={facebookIcon} alt="Фейсбук" />
        </a>
      </li>
    </ul>
  );
};

export default HeaderSocial;
