import React, { useState } from "react";

const ReviewsItem = ({ name, device, description, image }) => {
  const [readAll, setReadAll] = useState(false);

  return (
    <div className="reviews__item item-reviews">
      <div className="item-reviews__image" aria-hidden="true">
        <img src={image} alt="" />
      </div>
      <div className="item-reviews__name">{name}</div>
      <div className="item-reviews__device">{device}</div>
      <p className={`item-reviews__description ${readAll ? "active" : ""}`}>
        {description}
      </p>
      <div className="item-reviews__button-wrapper">
        <button
          onClick={() => setReadAll((read) => !read)}
          type="button"
          className="item-reviews__button"
        >
          {readAll ? "Свернуть" : "Читать полностью"}
        </button>
      </div>
    </div>
  );
};

export default ReviewsItem;
