import React from "react";
import Consultation from "../Consultation/Consultation";
import IntroContent from "./IntroContent";
import image from "../../assets/img/content/intro-1.png";

const Intro = () => {
  return (
    <Consultation className="intro" image={image} isIntro={true}>
      <IntroContent />
    </Consultation>
  );
};

export default Intro;
