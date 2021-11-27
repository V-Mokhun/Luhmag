import React from "react";
import About from "../components/About/About";
import Catalog from "../components/Catalog/Catalog";
import ConsultationButton from "../components/ConsultationButton/ConsultationButton";
import Intro from "../components/Intro/Intro";

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <ConsultationButton />
      <Catalog />
    </>
  );
};

export default Home;
