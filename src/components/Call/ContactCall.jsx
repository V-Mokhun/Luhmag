import React from "react";
import Call from "./Call";
import image from "../../assets/img/icons/phone.svg";

const ContactCall = () => {
  return (
    <Call className={"contact-call"}>
      <div className="call__image contact-call__image">
        <img src={image} alt="" />
      </div>
      <div className="call__content contact-call__content">
        <p className="call__description contact-call__description">
          Если у Вас срочный вопрос, позвоните в службу поддержки:
          <a href="tel:88005512330">8 (800) 551-23-30</a> (звонок бесплатный)
        </p>
      </div>
    </Call>
  );
};

export default ContactCall;
