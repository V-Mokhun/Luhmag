import React from "react";
import About from "../components/About/About";
import Benefits from "../components/Benefits/Benefits";
import Catalog from "../components/Catalog/Catalog";
import ConsultationChoice from "../components/Consultation/ConsultationChoice/ConsultationChoice";
import ConsultationDecide from "../components/Consultation/ConsultationDecide/ConsultationDecide";
import ConsultationButton from "../components/ConsultationButton/ConsultationButton";
import Delivery from "../components/Delivery/Delivery";
import Intro from "../components/Intro/Intro";
import News from "../components/News/News";
import Questions from "../components/Questions/Questions";
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
      <Delivery />
      <ConsultationDecide />
      <Questions />
    </>
  );
};

export default Home;
