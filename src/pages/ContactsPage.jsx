import React from "react";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import ContactsCall from "../components/Call/ContactsCall";
import Contacts from "../components/Contacts/Contacts";
import ContactsAbout from "../components/ContactsAbout/ContactsAbout";
import Feedback from "../components/Feedback/Feedback";

const ContactsPage = () => {
  return (
    <section className="contacts-page">
      <Breadcrumps className={"contacts-page__breadcrumps"}>
        <BreadcrumpsItem>
          <span>Контакты</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <ContactsAbout />
      <ContactsCall />
      <Feedback />
      <Contacts />
    </section>
  );
};

export default ContactsPage;
