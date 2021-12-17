import React from "react";
import { useSelector } from "react-redux";
import MyTitle from "../../ui/MyTitle";
import Modal from "../Modal";

const ThankModal = ({ children, ...props }) => {
  const name = useSelector((state) => state.user.name);

  return (
    <Modal className="thank-modal icon" {...props}>
      <MyTitle Component={"h2"} className={"thank-modal__title"}>
        Спасибо, {name}
      </MyTitle>
      <div className="thank-modal__text">{children}</div>
    </Modal>
  );
};

export default ThankModal;
