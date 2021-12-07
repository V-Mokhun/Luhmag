import React from "react";
import MyTitle from "../../ui/MyTitle";
import Modal from "../Modal";

const TypesModal = ({ title, description, ...props }) => {
  return (
    <Modal className="types-modal" {...props}>
      <MyTitle Component="h3" className="types-modal__title">
        {title}
      </MyTitle>
      <p className="types-modal__description">{description}</p>
    </Modal>
  );
};

export default TypesModal;
