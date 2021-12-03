import React from "react";
import Consultation from "../Consultation";
import image from "../../../assets/img/content/intro-1.png";
import ConsultationDeliveryContent from "./ConsultationDeliveryContent";
import Waves from "../../Waves/Waves";

const ConsultationDelivery = () => {
  return (
    <Consultation
      className="delivery-consultation"
      image={image}
      waves={<Waves className="delivery-consultation__waves" />}
    >
      <ConsultationDeliveryContent />
    </Consultation>
  );
};

export default ConsultationDelivery;
