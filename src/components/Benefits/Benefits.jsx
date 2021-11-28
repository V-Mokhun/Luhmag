import React from "react";
import { useSelector } from "react-redux";
import MyTitle from "../../ui/MyTitle";
import geoImg from "../../assets/img/icons/geo-big.svg";
import earImg from "../../assets/img/icons/ear.svg";
import headphonesImg from "../../assets/img/icons/headphones.svg";
import BenefitsItem from "./BenefitsItem";

const Benefits = () => {
  const city = useSelector((state) => state.user.city);

  return (
    <section className="benefits">
      <div className="container">
        <MyTitle Component="h2" className="benefits__title">
          С нами удобно
        </MyTitle>
        <ul className="benefits__list">
          <BenefitsItem
            img={geoImg}
            label={`Слуховые аппараты в наличии в ${city}`}
            description={
              "Вам не придется долго ждать заказ из другого города и переплачивать за доставку, товар уже в наличии по адресу: ул. Ленинградская, 100"
            }
          />
          <BenefitsItem
            img={earImg}
            label={`Большой выбор слуховых аппаратов`}
            description={`В магазине представлен большой ассортимент моделей слуховых аппаратов различных типов. У нас есть из чего выбрать.`}
          />
          <BenefitsItem
            img={headphonesImg}
            label={`Круглосуточная поддержка 24/7`}
            description={`Опытные сотрудники нашего колл-центра оказывают ежедневную круглосуточную поддержку и с радостью ответят на все Ваши вопросы.`}
          />
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
