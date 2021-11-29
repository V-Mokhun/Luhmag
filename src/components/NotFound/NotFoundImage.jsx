import React from "react";

const NotFoundImage = ({ image }) => {
  return (
    <div className="not-found__image" aria-hidden="true">
      <img src={image} alt="" />
    </div>
  );
};

export default NotFoundImage;
