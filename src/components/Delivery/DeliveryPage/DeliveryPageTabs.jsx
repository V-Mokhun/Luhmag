import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MyButton from "../../../ui/MyButton";
import DeliveryPageItem from "./DeliveryPageItem";
import headphonesIcon from "../../../assets/img/icons/headphones.svg";
import geoIcon from "../../../assets/img/icons/geo-big.svg";
import timeIcon from "../../../assets/img/icons/time.svg";
import walletIcon from "../../../assets/img/icons/wallet.svg";
import rublesIcon from "../../../assets/img/icons/rubles.svg";
import checkIcon from "../../../assets/img/icons/check-big.svg";
import courierIcon from "../../../assets/img/content/delivery-1.jpg";
import mailIcon from "../../../assets/img/content/delivery-2.jpg";

const DeliveryPageTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs
      className="delivery-page__tabs"
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      <TabList className="delivery-page__tabs-list">
        <Tab className="delivery-page__tabs-item" selectedClassName="active">
          <MyButton className="delivery-page__tabs-button">Самовывоз</MyButton>
        </Tab>
        <Tab className="delivery-page__tabs-item" selectedClassName="active">
          <MyButton className="delivery-page__tabs-button">
            Курьерская доставка
          </MyButton>
        </Tab>
        <Tab className="delivery-page__tabs-item" selectedClassName="active">
          <MyButton className="delivery-page__tabs-button">
            Доставка по области/краю
          </MyButton>
        </Tab>
      </TabList>
      <TabPanel
        className="delivery-page__tabs-content"
        selectedClassName="active"
      >
        <ul className="delivery-page__list">
          <DeliveryPageItem image={headphonesIcon} label="Городской номер">
            <a href="tel:84996776135">8 (499) 677-61-35</a>
          </DeliveryPageItem>
          <DeliveryPageItem image={geoIcon} label="Адрес">
            <p>
              г.Москва, Настасьинский переулок, д. 8, стр. 2, оф. 10, ст. метро
              Пушкинская
            </p>
          </DeliveryPageItem>
          <DeliveryPageItem image={timeIcon} label="Режим работы">
            <p>Пн - Пт: 10:00 - 20:00</p>
            <p>Сб: 10:00 - 16:00</p>
            <p>Вс: 10:00 - 14:00</p>
          </DeliveryPageItem>
          <DeliveryPageItem
            image={walletIcon}
            label="Оплата при получении в магазине"
          >
            <p>Наличными или банковской картой</p>
          </DeliveryPageItem>
        </ul>
      </TabPanel>
      <TabPanel
        className="delivery-page__tabs-content"
        selectedClassName="active"
      >
        <ul className="delivery-page__list">
          <DeliveryPageItem image={headphonesIcon} label="8 (499) 677-61-35">
            <p>для расчета стоимости доставки свяжитесь с нашим менеджером</p>
          </DeliveryPageItem>
          <DeliveryPageItem image={rublesIcon} label="Стоимость доставки">
            <p>200-600 ₽</p>
          </DeliveryPageItem>
          <DeliveryPageItem image={walletIcon} label="Оплата">
            <p>Наличными или банковской картой</p>
          </DeliveryPageItem>
          <DeliveryPageItem
            image={checkIcon}
            label="Оплата производится при получении товара"
          >
            <p>Вы можете оплатить удобные для себя способом</p>
          </DeliveryPageItem>
        </ul>
      </TabPanel>
      <TabPanel
        className="delivery-page__tabs-content"
        selectedClassName="active"
      >
        <ul className="delivery-page__list">
          <DeliveryPageItem image={headphonesIcon} label="8 (499) 677-61-35">
            <p>для расчета стоимости доставки свяжитесь с нашим менеджером</p>
          </DeliveryPageItem>
          <DeliveryPageItem
            image={courierIcon}
            label="Отправка курьерской службой СДЭК"
          >
            <p>Мы берем предоплату за доставку. В среднем 200-600₽</p>
          </DeliveryPageItem>
          <DeliveryPageItem image={mailIcon} label="При отправке Почтой России">
            <p>Вы можете оплатить удобные для себя способом</p>
          </DeliveryPageItem>
          <DeliveryPageItem
            image={walletIcon}
            label="Оплата после получения товара"
          >
            <p>удобным для вас способом</p>
          </DeliveryPageItem>
        </ul>
      </TabPanel>
    </Tabs>
  );
};

export default DeliveryPageTabs;
