import React, { useState } from "react";
import CityModal from "../../modals/CityModal/CityModal";
import DeliveryItem from "./DeliveryItem";

const DeliveryCity = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <DeliveryItem {...props}>
        <button
          type="button"
          className="delivery__link"
          onClick={() => setModal(true)}
        >
          Выбрать город
        </button>
      </DeliveryItem>
      <CityModal show={modal} close={() => setModal(false)} />
    </>
  );
};

export default DeliveryCity;
