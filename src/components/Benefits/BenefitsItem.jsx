import React from "react";

const BenefitsItem = ({ label, description, img }) => {
  return (
    <li className="benefits__item">
      <div aria-hidden="true" className="benefits__image">
        <img src={img} alt="" />
      </div>
      <h5 className="benefits__label">{label}</h5>
      <p className="benefits__description">{description}</p>
    </li>
  );
};

export default BenefitsItem;
