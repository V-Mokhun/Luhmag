import React, { useState } from "react";
import TypesModal from "../../modals/TypesModal/TypesModal";

const TypesItem = ({ title, description, modalDescription }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <li
        tabIndex="0"
        onClick={() => setModal(true)}
        aria-haspopup="true"
        className="types__item item-types"
      >
        <h4 className="item-types__title">{title}</h4>
        <p className="item-types__description">{description}</p>
      </li>
      <TypesModal
        show={modal}
        close={() => setModal(false)}
        title={description}
        description={modalDescription}
      />
    </>
  );
};

export default TypesItem;
