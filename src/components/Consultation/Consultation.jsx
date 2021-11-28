import React from "react";
import ContactForm from "../../forms/ContactForm";
import ConsultationContent from "./ConsultationContent";
import ConsultationImage from "./ConsultationImage";

const Consultation = ({ className, children, image, isIntro, waves }) => {
  return (
    <section className={`consultation ${className ? className : ""}`}>
      <div className="consultation__container container">
        <div className="consultation__inner">
          {waves}
          <ConsultationContent>{children}</ConsultationContent>
          <ConsultationImage image={image} />
        </div>
        {!isIntro && (
          <div className="consultation__mobile">
            <ContactForm
              className="consultation__mobile-form"
              buttonText="Получить консультацию"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Consultation;
