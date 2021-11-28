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
      <span className="label-help">{helpMessage}</span>
      <input
        ref={innerRef}
        className={`input ${className ? className : ""}`}
        {...field}
        {...props}
      />
      <span className="label-error">{error}</span>
    </label>
  );
};

export default MyInput;
