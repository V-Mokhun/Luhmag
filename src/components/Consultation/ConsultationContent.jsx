import React from "react";
import ContactForm from "../../forms/ContactForm";

const ConsultationContent = ({ children }) => {
  return (
    <div className="consultation__content">
      {children}
      <ContactForm
        className="consultation__form"
        buttonText="Получить консультацию"
      />
    </div>
  );
};

export default ConsultationContent;
