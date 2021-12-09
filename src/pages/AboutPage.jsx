import React from "react";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import About from "../components/About/About";
import Workers from "../components/Workers/Workers";
import Requisites from "../components/Requisites/Requisites";

const AboutPage = () => {
  return (
    <section className="about-page">
      <Breadcrumps className="about-page__breadcrumps">
        <BreadcrumpsItem>
          <span>О нас</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <About />
      <Workers />
      <Requisites />
    </section>
  );
};

export default AboutPage;
