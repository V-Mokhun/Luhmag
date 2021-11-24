import React from "react";

const MyInput = ({
  labelClassName,
  className,
  field,
  error,
  helpMessage,
  innerRef,
  ...props
}) => {
  return (
    <label className={`label ${labelClassName ? labelClassName : ""}`}>
      <span className="help">{helpMessage}</span>
      <input
        ref={innerRef}
        className={`input ${className ? className : ""}`}
        {...field}
        {...props}
      />
      <span className="error">{error}</span>
    </label>
  );
};

export default MyInput;
