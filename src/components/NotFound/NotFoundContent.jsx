import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../../routes/routes";
import MyButton from "../../ui/MyButton";

const NotFoundContent = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found__content">
      <h1 className="not-found__title">
        <span>404</span> ошибка
      </h1>
      <p className="not-found__description">
        Страница, которую Вы ищете не существует, либо устарела.
      </p>
      <div className="not-found__actions">
        <MyButton
          onClick={() => navigate(-1)}
          className="not-found__button button--secondary"
        >
          Вернуться назад
        </MyButton>
        <MyButton
          Component={Link}
          to={HOME_ROUTE}
          className="not-found__button"
        >
          На главную
        </MyButton>
      </div>
    </div>
  );
};

export default NotFoundContent;
