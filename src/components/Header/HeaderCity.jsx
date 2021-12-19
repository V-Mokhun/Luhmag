import React, { Suspense, useState } from "react";
import MyLoader from "../../ui/MyLoader";
const CityModal = React.lazy(() => import("../../modals/CityModal/CityModal"));

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
        <Suspense fallback={<MyLoader className={"fallback__loader"} />}>
        <CityModal show={modal} close={() => setModal(false)} />
      </Suspense>
    </div>
  );
};

export default HeaderCity;
