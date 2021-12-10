import React from "react";
import MyTitle from "../../ui/MyTitle";

const ContactsAbout = () => {
  return (
    <section className="contacts-about">
      <div className="container">
        <MyTitle Component={"h1"} className={"contacts-about__title"}>
          Контакты
        </MyTitle>
        <div className="contacts-about__list"></div>
      </div>
    </section>
  );
};

export default ContactsAbout;
