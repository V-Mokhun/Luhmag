import React, { useState } from "react";
import CallModal from "../../modals/CallModal";
import MyButton from "../../ui/MyButton";

const ConsultationButton = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <MyButton className="consultation-button" onClick={() => setModal(true)}>
        Получить консультацию
      </MyButton>
      <CallModal show={modal} close={() => setModal(false)} />
    </>
  );
};

export default ConsultationButton;
