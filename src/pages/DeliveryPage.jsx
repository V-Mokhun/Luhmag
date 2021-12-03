import React from "react";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import ConsultationDelivery from "../components/Consultation/ConsultationDelivery/ConsultationDelivery";
import Contacts from "../components/Contacts/Contacts";
import DeliveryPageContent from "../components/Delivery/DeliveryPage/DeliveryPageContent";

const DeliveryPage = () => {
  return (
    <>
      <Breadcrumps className="delivery-page__breadcrumps">
        <BreadcrumpsItem>
          <span>Доставка и оплата</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <DeliveryPageContent />
      <ConsultationDelivery />
      <Contacts />
    </>
  );
};

export default DeliveryPage;
