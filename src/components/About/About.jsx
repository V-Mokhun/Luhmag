import React from "react";
import MyTitle from "../../ui/MyTitle";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <MyTitle Component="h2" className="about__title">
          Какие виды <span>слуховых аппаратов бывают?</span>
        </MyTitle>
      </div>
    </section>
  );
};

export default About;
