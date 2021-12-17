import React from "react";
import loader from "../assets/img/icons/loader.png";

const MyLoader = ({ className }) => {
  return (
    <div
      aria-label="Загрузка..."
      className={`loader ${className ? className : ""}`}
    >
      <img src={loader} alt="" />
    </div>
  );
};

export default MyLoader;
