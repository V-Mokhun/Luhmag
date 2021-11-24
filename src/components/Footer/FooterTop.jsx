import React from "react";
import HeaderInfo from "../Header/HeaderInfo";
import Menu from "../Menu/Menu";

const FooterTop = () => {
  return (
    <div className="footer__top top-footer">
      <div className="container">
        <div className="top-footer__top">
          <Menu className="top-footer__menu" />
        </div>
        <div className="top-footer__bottom">
          <HeaderInfo isHeader={false} className="top-footer__info" />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
