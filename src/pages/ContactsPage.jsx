import React from "react";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import ContactCall from "../components/Call/ContactCall";
import Contacts from "../components/Contacts/Contacts";

const ContactsPage = () => {
  return (
    <section className="contacts-page">
      <Breadcrumps className={"contacts-page__breadcrumps"}>
        <BreadcrumpsItem>
          <span>Контакты</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <ContactCall />
      <Contacts />
    </section>
  );
};

export default ContactsPage;
