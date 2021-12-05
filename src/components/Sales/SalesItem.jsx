import React from "react";
import { Link } from "react-router-dom";
import { SALES_ROUTE } from "../../routes/routes";
import MyButton from "../../ui/MyButton";

const SalesItem = ({ id, image, date, title, isEnd }) => {
  return (
    <div className="sales__item item-sales">
      <Link className="item-sales__image" to={`${SALES_ROUTE}/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div className="item-sales__content">
        <time dateTime={date} className="item-sales__date">
          {date}
        </time>
        <div className="item-sales__title">{title}</div>
      </div>
      <div className="item-sales__link-wrapper">
        <MyButton
          Component={Link}
          className={`item-sales__link ${isEnd ? "end" : ""}`}
          to={`${SALES_ROUTE}/${id}`}
        >
          {isEnd ? "Акция завершена" : "Прочитать"}
        </MyButton>
      </div>
    </div>
  );
};

export default SalesItem;
