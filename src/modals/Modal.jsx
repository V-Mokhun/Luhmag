import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ show, close, children, className }) => {
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
