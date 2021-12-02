import React from "react";
import { useSelector } from "react-redux";
import MyTitle from "../../ui/MyTitle";
import DeliveryCity from "./DeliveryCity";
import DeliveryItem from "./DeliveryItem";
import geoIcon from "../../assets/img/icons/geo-big.svg";
import deliveryImage1 from "../../assets/img/content/delivery-1.jpg";
import deliveryImage2 from "../../assets/img/content/delivery-2.jpg";

const Delivery = () => {
  const city = useSelector((state) => state.user.city);

  return (
    <section className="delivery">
      <div className="container">
        <MyTitle Component="h2" className="delivery__title">
          Доставка
        </MyTitle>
        <ul className="delivery__list">
          <DeliveryCity
            image={geoIcon}
            title={`Слуховой аппарат в наличии в ${city}`}
            description={`Если Вы находитесь не в ${city}, а в другом городе, где есть наши представительства, выберите город.`}
          />
          <DeliveryItem
            image={deliveryImage1}
            title="ТК СДЭК (Для области)"
            description="Оперативная доставка по области ТК СДЭК. Доставка рассчитывается индивидуально и зависит от расстояния пересылки."
          />
          <DeliveryItem
            image={deliveryImage2}
            title="Почта России (Для области)"
            description="Бюджетный способ доставки по всей России. Стоимость доставки рассчитывается индивидуально."
          />
        </ul>
      </div>
    </section>
  );
};

export default Delivery;
