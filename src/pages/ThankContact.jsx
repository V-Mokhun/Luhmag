import React from "react";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import Thank from "../components/Thank/Thank";
import image from "../assets/img/content/thanks-contact.png";

const ThankContact = () => {
  return (
    <>
      <Breadcrumps className="thank__breadcrumps">
        <BreadcrumpsItem>
          <span>Спасибо</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <Thank isContact={true} image={image} titleText="Спасибо за заявку" />
    </>
  );
};

export default ThankContact;
