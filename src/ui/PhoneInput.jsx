import React from "react";
import MyInput from "./MyInput";
import MaskedInput from "react-text-mask";

const PhoneInput = (props) => {
  return (
    <MaskedInput
      {...props}
      mask={[
        "+",
        /[1-9]/,
        " ",
        "(",
        /\d/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
      ]}
      render={(ref, props) => <MyInput innerRef={ref} {...props} />}
    ></MaskedInput>
  );
};

export default PhoneInput;
