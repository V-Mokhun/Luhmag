import React from "react";
import About from "../components/About/About";
import Benefits from "../components/Benefits/Benefits";
import Catalog from "../components/Catalog/Catalog";
import ConsultationChoice from "../components/Consultation/ConsultationChoice/ConsultationChoice";
import ConsultationButton from "../components/ConsultationButton/ConsultationButton";
import Intro from "../components/Intro/Intro";

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <ConsultationButton />
      <Catalog />
      <ConsultationChoice />
      <Benefits />
    </>
  );
};

export default Home;
