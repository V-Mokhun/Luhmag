import React from "react";
import image from "../../assets/img/content/intro-1.png";

const IntroImage = () => {
  return (
    <div className="intro__image" aria-hidden="true">
      <img src={image} alt="" />
    </div>
  );
};

export default IntroImage;
