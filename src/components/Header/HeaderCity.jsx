import React, { useState } from "react";
import CityModal from "../../modals/CityModal";

const HeaderCity = ({ city }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="header__city">
      <button
        type="button"
        className="header__city-button dropdown-link"
        onClick={() => setModal(true)}
      >
        Выберите город:
        <span className="header__city-name"> {city}</span>
      </button>
      <span className="header__city-street">ул. Ленинградская, 100</span>
      <CityModal show={modal} close={() => setModal(false)} />
    </div>
  );
};

export default HeaderCity;
