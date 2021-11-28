import React, { useState } from "react";
import AboutModal from "../../modals/AboutModal/AboutModal";

const AboutItem = ({ title, description, modalDescription }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <li
        tabIndex="0"
        onClick={() => setModal(true)}
        aria-haspopup="true"
        className="about__item item-about"
      >
        <h4 className="item-about__title">{title}</h4>
        <p className="item-about__description">{description}</p>
      </li>
      <AboutModal
        show={modal}
        close={() => setModal(false)}
        title={description}
        description={modalDescription}
      />
    </>
  );
};

export default AboutItem;
