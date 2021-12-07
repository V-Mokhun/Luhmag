import React from "react";
import Benefits from "../components/Benefits/Benefits";
import Catalog from "../components/Catalog/Catalog";
import ConsultationChoice from "../components/Consultation/ConsultationChoice/ConsultationChoice";
import ConsultationDecide from "../components/Consultation/ConsultationDecide/ConsultationDecide";
import ConsultationQuestion from "../components/Consultation/ConsultationQuestion/ConsultationQuestion";
import ConsultationButton from "../components/ConsultationButton/ConsultationButton";
import Contacts from "../components/Contacts/Contacts";
import Delivery from "../components/Delivery/Delivery";
import Intro from "../components/Intro/Intro";
import News from "../components/News/News";
import Questions from "../components/Questions/Questions";
import Reviews from "../components/Reviews/Reviews";
import Steps from "../components/Steps/Steps";
import Types from "../components/Types/Types";

const Home = () => {
  return (
    <>
      <Intro />
      <Types />
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
      <ConsultationQuestion />
      <Contacts />
    </>
  );
};

export default Home;
