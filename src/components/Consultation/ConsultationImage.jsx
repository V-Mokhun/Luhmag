import React from "react";

const ConsultationImage = ({ image }) => {
  return (
    <div className="consultation__image" aria-hidden="true">
      <img src={image} alt="" />
    </div>
  );
};

export default ConsultationImage;
