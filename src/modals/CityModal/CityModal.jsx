import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCity } from "../../store/user/userReducer";
import MyInput from "../../ui/MyInput";
import MyTitle from "../../ui/MyTitle";
import Modal from "../Modal";

const CITIES = [
  ["Абакан", "Ангарск", "Архангельск", "  Астрахань"],
  [
    "Балаково",
    "Балашиха",
    "Барнаул",
    "Белгород",
    "Бийск",
    "Благовещенск",
    "Братск",
    "Брянск",
  ],
  [
    "Великий Новгород",
    "Владивосток",
    "Владикавказ",
    "Владимир",
    "Волгоград",
    "Волжский",
    "Вологда",
    "Воронеж",
  ],
  ["Грозный"],
  ["Екатеринбург"],
  ["Иваново", "Ижевск", "Иркутск"],
  ["Йошкар-Ола"],
  [
    "Казань",
    "Калининград",
    "Калуга",
    "Кемерово",
    "Киров",
    "Королёв",
    "Кострома",
    "Краснодар",
    "Красноярск",
    "Курган",
    "Курск",
    "Кызыл",
  ],
  ["Липецк", "Люберцы"],
  ["Магнитогорск", "Махачкала", "Москва", "Мурманск", "Мытищи"],
  [
    "Набережные Челны",
    "Нальчик",
    "Нижневартовск",
    "Нижний Новгород",
    "Нижний Тагил",
    "Новокузнецк",
    "Новосибирск",
    "Новочеркасск",
    "Норильск",
  ],
  ["Омск", "Орел", "Оренбург", "Орск"],
  ["Пенза", "Пермь", "Петрозаводск", "Подольск", "Прокопьевск", "Псков"],
  ["Ростов-на-Дону", "Рыбинск", "Рязань"],
  [
    "Самара",
    "Санкт-Петербург",
    "Саранск",
    "Саратов",
    "Севастополь",
    "Северодвинск",
    "Симферополь",
    "Смоленск",
    "Сочи",
    "Ставрополь",
    "Старый Оскол",
    "Стерлитамак",
    "Сургут",
    "Сызрань",
    "Сыктывкар",
  ],
  ["Таганрог", "Тамбов", "Тверь", "Тольятти", "Томск", "Тула", "Тюмень"],
  ["Улан-Удэ", "Ульяновск", "Уссурийск", "Уфа"],
  ["Хабаровск", "Химки"],
  ["Чебоксары", "Челябинск", "Череповец", "Чита"],
  ["Энгельс"],
  ["Южно-Сахалинск"],
  ["Якутск", "Ярославль"],
];

const CityModal = (props) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  let filteredCities = CITIES.map((city) =>
    city.filter((item) =>
      item.trim().toLowerCase().includes(searchValue.trim().toLowerCase())
    )
  );

  useEffect(() => {
    filteredCities = CITIES.map((city) =>
      city.filter((item) =>
        item.trim().toLowerCase().includes(searchValue.trim().toLowerCase())
      )
    );
  }, [searchValue]);

  return (
    <Modal className="city-modal" {...props}>
      <MyTitle Component="h2" className="city-modal__title">
        Выберите город
      </MyTitle>
      <div className="city-modal__search">
        <MyInput
          helpMessage="Укажите в поле, если не нашли в списке"
          placeholder="Москва"
          className="city-modal__search-input"
          type="text"
          labelClassName="search-label"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <ul className="city-modal__list">
        {filteredCities.map((city, i) => {
          if (city.length < 1) return null;

          return (
            <li key={city.join("") + i} className="city-modal__item">
              <p className="city-modal__letter">{city[0][0]}</p>
              <ul className="city-modal__cities">
                {city.map((item, i) => (
                  <li key={item + i} className="city-modal__city">
                    <button
                      className="city-modal__city-button"
                      type="button"
                      onClick={() => {
                        dispatch(setCity(item));
                        props.close();
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </Modal>
  );
};

export default CityModal;
