import React from "react";
import ContactForm from "../forms/ContactForm";
import MyTitle from "../ui/MyTitle";
import Modal from "./Modal";

const CallModal = (props) => {
  return (
    <Modal className="call-modal icon" {...props}>
      <MyTitle Component="h2" className="call-modal__title">
        Оставьте свои данные
      </MyTitle>
      <p className="call-modal__subtitle">
        и наш менеджер свяжется с Вами <span>в течение 3 минут</span>
      </p>
      <ContactForm closeModal={props.close} className="call-modal__form"/>
    </Modal>
  );
};

export default CallModal;
