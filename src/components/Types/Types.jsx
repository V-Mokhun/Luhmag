import React from "react";
import MyTitle from "../../ui/MyTitle";
import TypesItem from "./TypesItem";
import image from "../../assets/img/content/types-1.png";

const Types = () => {
  return (
    <section className="types">
      <div className="container">
        <MyTitle Component="h2" className="types__title">
          Какие виды <span>слуховых аппаратов бывают?</span>
        </MyTitle>
        <div className="types__inner">
          <div className="types__column types__column--left">
            <ul className="types__list">
              <TypesItem
                title="IIC"
                description="«Невидимый» слуховой аппарат (IIC)"
                modalDescription="Устройство, размещаемое глубоко в слуховом проходе. Благодаря миниатюрным размерам незаметно для окружающих. Подходит для пациентов, страдающих умеренной и легкой тугоухостью. Производятся по индивидуальным заказам."
              />
              <TypesItem
                title="CIC"
                description="Полностью скрытый внутриканальный слуховой аппарат (CIC)"
                modalDescription="Размещается внутри слухового канала. Снаружи можно наблюдать только тонкую прозрачную леску, с помощью которой аппарат извлекается из уха. Рекомендуется для людей с умеренной потерей слуха.                "
              />
              <TypesItem
                title="ITC"
                description="Внутриканальный слуховой аппарат (ITC)."
                modalDescription="Состоит из мягкой вставки, которая вставляется в слуховой проход и наружной части. Имеет регулятор громкости для получения максимально комфортного звучания. Отличается легкостью использования и компактностью."
              />
            </ul>
          </div>
          <div className="types__column types__column--image">
            <div className="types__image">
              <img src={image} alt="Слуховой аппарат" />
            </div>
          </div>
          <div className="types__column types__column--right">
            <ul className="types__list">
              <TypesItem
                title="ITE"
                description="Внутриушной слуховой аппарат (ITE)."
                modalDescription="Мягкая вставка помещается в слуховой проход. Основная часть усилителя слуха располагается непосредственно в ушной раковине. Имеет регулятор громкости, а также дополнительные функции."
              />
              <TypesItem
                title="RIC"
                description="Модель с ресивером в слуховом канале (RIC)."
                modalDescription="Динамик слухового аппарата размещается в слуховом канале, к нему подключаются специальные  тонкие провода. Не имеет акустической трубки, отличается привлекательным дизайном и малозаметностью."
              />
              <TypesItem
                title="BTE"
                description="	Заушный слуховой аппарат (BTE)."
                modalDescription="Наиболее широко используемая модель усилителя слуха. Вся электроника находится в компактном корпусе, который в рабочем состоянии находится за ухом пользователя. Передача звука производится по пластиковому звуководу имеющему на конце ушной вкладыш."
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Types;
