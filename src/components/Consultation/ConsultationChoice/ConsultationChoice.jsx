import React from "react";
import Consultation from "../Consultation";
import image from "../../../assets/img/content/consultation-1.png";
import ConsultationChoiceContent from "./ConsultationChoiceContent";
import Waves from "../../Waves/Waves";

const ConsultationChoice = ({ className }) => {
  return (
    <Consultation
      className={`choice-consultation ${className ? className : ""}`}
      image={image}
      waves={<Waves className="choice-consultation__waves" />}
    >
      <ConsultationChoiceContent />
    </Consultation>
  );
};

export default ConsultationChoice;
