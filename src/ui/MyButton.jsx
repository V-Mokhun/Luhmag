import React from "react";

const MyButton = ({ className, children, ...props }) => {
  return (
    <button className={`button ${className ? className : ""}`} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
