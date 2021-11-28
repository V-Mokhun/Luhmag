import React from "react";
import MyTitle from "../../ui/MyTitle";
import Modal from "../Modal";

const AboutModal = ({ title, description, ...props }) => {
  return (
    <Modal className="about-modal" {...props}>
      <MyTitle Component="h3" className="about-modal__title">
        {title}
      </MyTitle>
      <p className="about-modal__description">{description}</p>
    </Modal>
  );
};

export default AboutModal;
