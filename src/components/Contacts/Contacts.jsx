import React from "react";
import ContactsInfo from "./ContactsInfo";
import ContactsMap from "./ContactsMap";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts__wrapper">
        <div className="container">
          <ContactsInfo />
        </div>
        <ContactsMap />
      </div>
    </section>
  );
};

export default Contacts;
