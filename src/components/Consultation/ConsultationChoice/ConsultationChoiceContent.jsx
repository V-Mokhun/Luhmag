import React from "react";
import MyTitle from "../../../ui/MyTitle";

const ConsultationChoiceContent = () => {
  return (
    <>
      <MyTitle
        className="consultation__title choice-consultation__title"
        Component="h2"
      >
        <span>Вы все еще не можете определиться</span> с выбором слухового
        аппарата?
      </MyTitle>
      <p className="consultation__description choice-consultation__description">
        Наши опытные специалисты Вас проконсультируют
      </p>
    </>
  );
};

export default ConsultationChoiceContent;
