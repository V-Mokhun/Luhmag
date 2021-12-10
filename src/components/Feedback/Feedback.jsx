import React, { useState } from "react";
import { useSelector } from "react-redux";
import FeedbackForm from "../../forms/FeedbackForm";
import ThankModal from "../../modals/ThankModal/ThankModal";
import MyTitle from "../../ui/MyTitle";

const Feedback = () => {
  const [modal, setModal] = useState(false);
  const email = useSelector((state) => state.user.email);

  return (
    <section className="feedback">
      <div className="container">
        <MyTitle Component="h3" className={"feedback__title"}>
          Обратная связь
        </MyTitle>
        <p className="feedback__help">* Обязательные поля для заполнения</p>
        <div className="feedback__inner">
          <FeedbackForm
            openModal={() => setModal(true)}
            className={"feedback__form"}
          />
        </div>
      </div>
      <ThankModal close={() => setModal(false)} show={modal}>
        <p>Ваш вопрос отправлен.</p>
        <p>
          Вы получите уведомление об ответе на e-mail: <span>{email}</span>
        </p>
      </ThankModal>
    </section>
  );
};

export default Feedback;
