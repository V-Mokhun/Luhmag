import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ show, close, children, className }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [show]);

  return ReactDOM.createPortal(
    <>
      {show ? (
        <div
          className={`modal ${className ? className : ""}`}
          onClick={() => close()}
        >
          <div className="modal__inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal__close"
              onClick={() => close()}
            />
            <div className="modal__body">{children}</div>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("modals")
  );
};

export default Modal;
