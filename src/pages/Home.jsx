import React from "react";
import About from "../components/About/About";
import ConsultationButton from "../components/ConsultationButton/ConsultationButton";
import Intro from "../components/Intro/Intro";

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <ConsultationButton />
    </>
  );
};

export default Home;
