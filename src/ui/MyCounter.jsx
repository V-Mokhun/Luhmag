import React from "react";

const MyCounter = ({ className, onDecrease, onIncrease, total }) => {
  return (
    <div className={`counter ${className ? className : ""}`}>
      <button
        type="button"
        className="counter__button counter__button-decrease"
        onClick={onDecrease}
      >
        -
      </button>
      <span className="counter__total">{total}</span>
      <button
        type="button"
        className="counter__button counter__button-increase"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default MyCounter;
