import React, { useState } from "react";
import CallModal from "../../modals/CallModal/CallModal";

const HeaderCall = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="header__call">
      <button
        type="button"
        className="header__call-button"
        onClick={() => setModal(true)}
      >
        Перезвоните мне
      </button>
      <CallModal show={modal} close={() => setModal(false)} />
    </div>
  );
};

export default HeaderCall;
