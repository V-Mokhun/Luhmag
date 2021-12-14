import React from "react";
import { useState } from "react";
import CatalogPageFilterItem from "./CatalogPageFilterItem";

const FILTER_LIST = [
  "Аналоговые",
  "Цифровые",
  "С регулировкой громкости",
  "Заушные",
  "Внутриушные",
  "Невидимые",
  "Для пожилых",
  "Недорогие",
  "Axon",
  "На аккумуляторе",
  "ХМ",
  "Усилители звука",
  "Zinbest",
  "Первая степень",
  "Вторая степень",
  "Третья степень",
  "Четвертая степень",
  "Jinghao",
  "Полностью скрытые внутриканальные",
  "Внутриканальные",
  "С ресивером в ушном канале",
  "Мощные",
  "Средней мощности",
  "Карманные",
  "Миниатюрные",
];

const CatalogPageFilter = () => {
  const [more, setMore] = useState(false);

  return (
    <ul className={`catalog-page__filter ${more ? "show-all" : ""}`}>
      {FILTER_LIST.map((item) => (
        <CatalogPageFilterItem name={item} key={item} />
      ))}
      <li className="catalog-page__filter-more">
        <button
          type="button"
          onClick={() => setMore((prev) => !prev)}
          className={`catalog-page__filter-more-btn ${more ? "show-all" : ""}`}
        />
      </li>
    </ul>
  );
};

export default CatalogPageFilter;
