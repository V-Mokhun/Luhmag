import React from "react";
import Call from "./Call";
import image from "../../assets/img/icons/phone.svg";

const ContactsCall = () => {
  return (
    <Call className={"contacts-call"}>
      <div className="call__image contacts-call__image">
        <img src={image} alt="" />
      </div>
      <div className="call__content contacts-call__content">
        <p className="call__description contacts-call__description">
          Если у Вас срочный вопрос, позвоните в службу поддержки:
          <a href="tel:88005512330">8 (800) 551-23-30</a> (звонок бесплатный)
        </p>
      </div>
    </Call>
  );
};

export default ContactsCall;
