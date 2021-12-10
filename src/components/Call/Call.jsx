import React from "react";
import Waves from "../Waves/Waves";

const Call = ({ className, children }) => {
  return (
    <div className={`call ${className ? className : ""}`}>
      <Waves className={"call__wave"} />
      <div className="container">
        <div className="call__inner">{children}</div>
      </div>
    </div>
  );
};

export default Call;
