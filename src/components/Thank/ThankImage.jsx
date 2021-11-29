import React from "react";

const ThankImage = ({ image }) => {
  return (
    <div className="thank__image" aria-hidden="true">
      <img src={image} alt="" />
    </div>
  );
};

export default ThankImage;
