import React from "react";

const MyTitle = ({ Component, className, children, ...props }) => {
  return (
    <Component className={`title ${className ? className : ""}`} {...props}>
      {children}
    </Component>
  );
};

export default MyTitle;
