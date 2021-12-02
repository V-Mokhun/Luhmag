import React from "react";
import Consultation from "../Consultation";
import image from "../../../assets/img/content/consultation-2.png";
import ConsultationQuestionContent from "./ConsultationQuestionContent";
import Waves from "../../Waves/Waves";

const ConsultationQuestion = () => {
  return (
    <Consultation
      className="question-consultation"
      image={image}
      waves={<Waves className="question-consultation__waves" />}
    >
      <ConsultationQuestionContent />
    </Consultation>
  );
};

export default ConsultationQuestion;
