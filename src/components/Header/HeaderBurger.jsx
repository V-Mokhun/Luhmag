import React from "react";

const HeaderBurger = ({ setMenuActive, menuActive }) => {
  return (
    <button
      onClick={() => setMenuActive((active) => !active)}
      type="button"
      className={`header__button ${menuActive ? "active" : ""}`}
    >
      <span></span>
    </button>
  );
};

export default HeaderBurger;
