import React from "react";
import image from "../../assets/img/content/steps-1.png";
import MyTitle from "../../ui/MyTitle";
import Waves from "../Waves/Waves";
import StepsContent from "./StepsContent";
import StepsImage from "./StepsImage";

const Steps = () => {
  return (
    <section className="steps">
      <Waves className="steps__waves" />
      <div className="steps__container container">
        <div className="steps__inner">
          <MyTitle Component="h2" className="steps__title-mobile">
            Как сделать заказ?
          </MyTitle>
          <StepsImage image={image} />
          <StepsContent />
        </div>
      </div>
    </section>
  );
};

export default Steps;
