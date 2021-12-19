import Menu from "../components/Menu/Menu";
import React, { useEffect, useState } from "react";
import HeaderInfo from "../components/Header/HeaderInfo";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scroll" : ""}`}>
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
