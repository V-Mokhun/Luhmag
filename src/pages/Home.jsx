import React from "react";
import About from "../components/About/About";
import Benefits from "../components/Benefits/Benefits";
import Catalog from "../components/Catalog/Catalog";
import ConsultationChoice from "../components/Consultation/ConsultationChoice/ConsultationChoice";
import ConsultationButton from "../components/ConsultationButton/ConsultationButton";
import Intro from "../components/Intro/Intro";
import News from "../components/News/News";
import Reviews from "../components/Reviews/Reviews";
import Steps from "../components/Steps/Steps";

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <ConsultationButton />
      <Catalog />
      <ConsultationChoice />
      <Benefits />
      <Steps />
      <Reviews />
      <News />
    </>
  );
};

export default Home;
