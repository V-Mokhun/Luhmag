import Menu from "../components/Menu";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__top"></div>
          <div className="header__bottom">
            <Menu className="header__menu" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
