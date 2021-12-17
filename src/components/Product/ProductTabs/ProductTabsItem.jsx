import React from "react";
import personImage from "../../../assets/img/icons/person-icon.svg";

const ProductReviewsItem = ({
  className,
  date,
  name,
  text,
  image = personImage,
}) => {
  return (
    <div className={`item-tabs-product__item ${className ? className : ""}`}>
      <div aria-hidden="true" className="item-tabs-product__image">
        <img src={image} alt="" />
      </div>
      <div className="item-tabs-product__content">
        {date && (
          <time dateTime={date} className="item-tabs-product__date">
            {date}
          </time>
        )}
        <div className="item-tabs-product__name">{name}</div>
        <p className="item-tabs-product__description">{text}</p>
      </div>
    </div>
  );
};

export default ProductReviewsItem;
