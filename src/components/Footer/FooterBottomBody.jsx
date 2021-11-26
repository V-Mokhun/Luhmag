import React from "react";
import FooterToTopButton from "./FooterToTopButton";

const FooterBottomBody = () => {
  return (
    <div className="bottom-footer__body">
      <div className="container">
        <div className="bottom-footer__content">
          <FooterToTopButton />
          <p className="bottom-footer__privacy">
            ООО Третья планета ИНН 7017448330 ОГРН 1187031063053
          </p>
          <ul className="bottom-footer__list">
            <li className="bottom-footer__item">
              <a className="bottom-footer__link" href="#">
                Возврат и обмен
              </a>
            </li>
            <li className="bottom-footer__item">
              <a className="bottom-footer__link" href="#">
                Гарантии
              </a>
            </li>
            <li className="bottom-footer__item">
              <a className="bottom-footer__link" href="#">
                Политика конфиденциальности
              </a>
            </li>
            <li className="bottom-footer__item">
              <a className="bottom-footer__link" href="#">
                Карта сайта
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomBody;
