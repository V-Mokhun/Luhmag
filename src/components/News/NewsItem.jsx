import React from "react";
import { Link } from "react-router-dom";
import { NEWS_ROUTE } from "../../routes/routes";
import MyButton from "../../ui/MyButton";

const NewsItem = ({ image, date, title, description, id }) => {
  return (
    <div className="news__item item-news">
      <Link
        to={`${NEWS_ROUTE}/${id}`}
        className="item-news__image"
        aria-hidden="true"
      >
        <img src={image} alt="" />
      </Link>
      <div className="item-news__content">
        <time dateTime={date} className="item-news__date">
          {date}
        </time>
        <div className="item-news__title">{title}</div>
        <p className="item-news__description">{description}</p>
      </div>
      <MyButton
        className="item-news__button"
        Component={Link}
        to={`${NEWS_ROUTE}/${id}`}
      >
        Читать полностью
      </MyButton>
    </div>
  );
};

export default NewsItem;
