import React, { useState } from "react";
import image from "../../../assets/img/content/decide-consultation-1.png";
import CallModal from "../../../modals/CallModal/CallModal";
import MyButton from "../../../ui/MyButton";
import MyTitle from "../../../ui/MyTitle";

const ConsultationDecide = () => {
  const [modal, setModal] = useState(false);

  return (
    <section className="decide-consultation">
      <div className="decide-consultation__container container">
        <div className="decide-consultation__image" aria-hidden="true">
          <img src={image} alt="" />
        </div>
        <div className="decide-consultation__content">
          <MyTitle Component="h2" className="decide-consultation__title">
            <span>Все еще не можете</span> выбрать слуховой аппарат?
          </MyTitle>
          <MyButton
            className="decide-consultation__button"
            onClick={() => setModal(true)}
          >
            Получить консультацию
          </MyButton>
        </div>
      </div>
      <CallModal show={modal} close={() => setModal(false)} />
    </section>
  );
};

export default ConsultationDecide;
