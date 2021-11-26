import React from "react";
import IntroContent from "./IntroContent";
import IntroImage from "./IntroImage";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__container container">
        <div className="intro__inner">
          <IntroContent />
          <IntroImage />
        </div>
      </div>
    </section>
  );
};

export default Intro;
