import React from "react";

const StepsImage = ({ image }) => {
  return (
    <div className="steps__image" aria-hidden="true">
      <img src={image} alt="" />
    </div>
  );
};

export default StepsImage;
