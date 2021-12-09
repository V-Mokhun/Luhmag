import React from "react";
import MyTitle from "../../ui/MyTitle";

const requisitesData = [
  {
    name: "Наименование организации:",
    value: "Общество с ограниченной ответственностью «Оптима»",
    isPhone: false,
    isEmail: false,
  },
  {
    name: "Краткое наименование:",
    value: "ООО «Оптима»",
    isPhone: false,
    isEmail: false,
  },
  {
    name: "ИНН:",
    value: "7017395180",
    isPhone: false,
    isEmail: false,
  },
  {
    name: "КПП:",
    value: "701701001",
    isPhone: false,
    isEmail: false,
  },
  {
    name: "ОГРН:",
    value: "1167031052264",
    isPhone: false,
    isEmail: false,
  },
  {
    name: "Юридический адрес:",
    value: "634041, Томская область, город Томск, улица Дзержинского, дом 51а,",
    isPhone: false,
    isEmail: false,
  },
  {
    name: "Почтовый адрес:",
    value: "634034, г. Томск, а/я 434",
    isPhone: false,
    isEmail: false,
  },
  {
    name: "Адрес электронной почты:",
    value: "info@top-relax.ru",
    isPhone: false,
    isEmail: true,
  },
  {
    name: "Телефон:",
    value: "+7 (3822) 22-75-99",
    isPhone: true,
    phoneNumber: "+73822227599",
    isEmail: false,
  },
  {
    name: "Должность руководителя:",
    value: "Директор",
    isPhone: false,
    isEmail: false,
  },
  {
    name: "ФИО руководителя:",
    value: "Митрухин Дмитрий Леонидович",
    isPhone: false,
    isEmail: false,
  },
  {
    name: "Действует на основании",
    value: "Устава",
    isPhone: false,
    isEmail: false,
  },
];

const Requisites = () => {
  return (
    <section className="requisites">
      <div className="requisites__container container">
        <MyTitle className="requisites__title" Component="h2">
          Реквизиты
        </MyTitle>
        <div className="requisites__inner">
          {requisitesData.map((item) => (
            <div key={item.name} className="requisites__item">
              <span className="requisites__name">{item.name}</span>
              {item.isEmail ? (
                <a className="requisites__value" href={`mailto:${item.value}`}>
                  {item.value}
                </a>
              ) : item.isPhone ? (
                <a
                  className="requisites__value"
                  href={`tel:${item.phoneNumber}`}
                >
                  {item.value}
                </a>
              ) : (
                <span className="requisites__value">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Requisites;
