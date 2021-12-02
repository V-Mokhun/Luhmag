import React from "react";
import MyTitle from "../../../ui/MyTitle";

const ConsultationQuestionContent = () => {
  return (
    <>
      <MyTitle
        className="consultation__title question-consultation__title"
        Component="h2"
      >
        Hе нашли ответ <span>на свой вопрос?</span>
      </MyTitle>
      <p className="consultation__description question-consultation__description">
        <span>Оставьте свои данные</span> и наш менеджер свяжется с Вами в
        течение 3 минут
      </p>
    </>
  );
};

export default ConsultationQuestionContent;
