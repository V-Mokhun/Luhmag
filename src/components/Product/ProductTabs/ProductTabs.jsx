import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MyButton from "../../../ui/MyButton";
import noReviewsImage from "../../../assets/img/icons/reviews.png";
import replyImage from "../../../assets/img/content/questions-reply.jpg";
import ProductTabsItem from "./ProductTabsItem";
import ProductForm from "../../../forms/ProductForm";
import ThankModal from "../../../modals/ThankModal/ThankModal";

const ProductTabs = ({ description, characteristics, reviews, questions }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [reviewThankModal, setReviewThankModal] = useState(false);
  const [questionThankModal, setQuestionThankModal] = useState(false);

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
      className="product__tabs tabs-product"
    >
      <TabList className={"tabs-product__list"}>
        <Tab selectedClassName="active" className={"tabs-product__list-item"}>
          <MyButton className={"tabs-product__button"}>Описание</MyButton>
        </Tab>
        <Tab selectedClassName="active" className={"tabs-product__list-item"}>
          <MyButton className={"tabs-product__button"}>Характеристики</MyButton>
        </Tab>
        <Tab selectedClassName="active" className={"tabs-product__list-item"}>
          <MyButton className={"tabs-product__button"}>Отзывы</MyButton>
        </Tab>
        <Tab selectedClassName="active" className={"tabs-product__list-item"}>
          <MyButton className={"tabs-product__button"}>Вопрос-ответ</MyButton>
        </Tab>
      </TabList>
      <TabPanel
        className={"tabs-product__content tabs-product__description"}
        selectedClassName="active"
      >
        <p>{description}</p>
      </TabPanel>
      <TabPanel
        className={"tabs-product__content tabs-product__characteristics"}
        selectedClassName="active"
      >
        {characteristics.map((item) => (
          <div key={item.name} className="tabs-product__characteristics-item">
            <span className="tabs-product__characteristics-name">
              {item.name}
            </span>
            <span className="tabs-product__characteristics-value">
              {item.value}
            </span>
          </div>
        ))}
      </TabPanel>
      <TabPanel
        className={
          "tabs-product__content tabs-product__reviews item-tabs-product"
        }
        selectedClassName="active"
      >
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.text} className="item-tabs-product__item-wrapper">
              <ProductTabsItem
                date={review.date}
                name={review.name}
                text={review.text}
              />
            </div>
          ))
        ) : (
          <div className="item-tabs-product__none">
            <div aria-hidden="true" className="item-tabs-product__icon">
              <img src={noReviewsImage} alt="" />
            </div>
            <p className="item-tabs-product__text">
              На данный момент у товара нет отзывов. Оставьте свой отзыв, чтобы
              стать первым!
            </p>
          </div>
        )}
        <h3 className="item-tabs-product__label">Оставить отзыв о товаре</h3>
        <ProductForm
          className={"item-tabs-product__form"}
          isReview={true}
          onFormSubmit={() => {
            setReviewThankModal(true);
          }}
        />
      </TabPanel>
      <TabPanel
        className={
          "tabs-product__content tabs-product__questions item-tabs-product"
        }
        selectedClassName="active"
      >
        {questions.length > 0 ? (
          questions.map((question) => (
            <div
              key={question.text}
              className="item-tabs-product__item-wrapper"
            >
              <ProductTabsItem
                date={question.date}
                name={question.name}
                text={question.text}
              />
              {question.reply && (
                <ProductTabsItem
                  className={"item-tabs-product__reply"}
                  name={"Представитель магазина"}
                  image={replyImage}
                  text={question.reply.text}
                />
              )}
            </div>
          ))
        ) : (
          <div className="item-tabs-product__none">
            <div aria-hidden="true" className="item-tabs-product__icon">
              <img src={noReviewsImage} alt="" />
            </div>
            <p className="item-tabs-product__text">
              На данный момент по этому товару не задавали вопросы. Оставьте
              свой вопрос, чтобы стать первым!
            </p>
          </div>
        )}
        <h3 className="item-tabs-product__label">Оставить вопрос о товаре</h3>
        <ProductForm
          className="item-tabs-product__form"
          onFormSubmit={() => {
            setQuestionThankModal(true);
          }}
        />
      </TabPanel>
      <ThankModal
        show={reviewThankModal}
        close={() => setReviewThankModal(false)}
      >
        Ваш отзыв успешно добавлен. После прохождения модерации, он будет
        показан на сайте.
      </ThankModal>
      <ThankModal
        show={questionThankModal}
        close={() => setQuestionThankModal(false)}
      >
        Ваш вопрос успешно добавлен. После прохождения модерации, он будет
        показан на сайте.
      </ThankModal>
    </Tabs>
  );
};

export default ProductTabs;
