import Menu from "../components/Menu/Menu";
import React, { useState } from "react";
import HeaderInfo from "../components/Header/HeaderInfo";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__top">
            <HeaderInfo
              menuActive={menuActive}
              setMenuActive={setMenuActive}
              isHeader={true}
            />
          </div>
          <div className={`header__bottom ${menuActive ? "active" : ""}`}>
            <Menu className="header__menu" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
