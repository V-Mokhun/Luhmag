import React from "react";

const MyButton = ({ Component = "button", className, children, ...props }) => {
  return (
    <Component className={`button ${className ? className : ""}`} {...props}>
      {children}
    </Component>
  );
};

export default MyButton;
