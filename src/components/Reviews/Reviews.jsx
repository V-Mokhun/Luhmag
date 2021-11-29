import React from "react";
import MyTitle from "../../ui/MyTitle";
import ReviewsItem from "./ReviewsItem";
import image from "../../assets/img/content/reviews-1.svg";
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react/swiper-react";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <MyTitle Component="h2" className="reviews__title">
          Отзывы
        </MyTitle>
        <div className="reviews__inner">
          <Slider className="reviews__slider">
            <SwiperSlide>
              <ReviewsItem
                name="Василий Пупкин"
                device="Глушилка EaglePro EP Метель-Z (3G, 4G, WiFi, GSM, DCS/PHS, GPS, Глонасс) (JAX-121A-6)"
                description={
                  "Большое спасибо сотрудникам магазина — выбирала слуховой аппарат для мужа, они мне очень помогли, сама бы я запуталась в таком ассортименте. Удачи!"
                }
                image={image}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewsItem
                name="Василий Пупкин"
                device="Слуховой аппарат Virto B-30 10 NW O (для детей и подростков) Virto B-30 10 NW O"
                description={
                  "Большое спасибо сотрудникам магазина — выбирала слуховой аппарат для мужа, они мне очень помогли, сама бы я запуталась в таком ассортименте. Удачи!"
                }
                image={image}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewsItem
                name="Василий Пупкин"
                device="Глушилка EaglePro EP Метель-Z (3G, 4G, WiFi, GSM, DCS/PHS, GPS, Глонасс) (JAX-121A-6)"
                description={
                  "Большое спасибо сотрудникам магазина — выбирала слуховой аппарат для мужа, они мне очень помогли, сама бы я запуталась в таком ассортименте. Удачи!"
                }
                image={image}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewsItem
                name="Василий Пупкин"
                device="Слуховой аппарат Virto B-30 10 NW O (для детей и подростков) Virto B-30 10 NW O"
                description={
                  "Большое спасибо сотрудникам магазина — выбирала слуховой аппарат для мужа, они мне очень помогли, сама бы я запуталась в таком ассортименте. Удачи!"
                }
                image={image}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewsItem
                name="Василий Пупкин"
                device="Глушилка EaglePro EP Метель-Z (3G, 4G, WiFi, GSM, DCS/PHS, GPS, Глонасс) (JAX-121A-6)"
                description={
                  "Большое спасибо сотрудникам магазина — выбирала слуховой аппарат для мужа, они мне очень помогли, сама бы я запуталась в таком ассортименте. Удачи!"
                }
                image={image}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewsItem
                name="Василий Пупкин"
                device="Слуховой аппарат Virto B-30 10 NW O (для детей и подростков) Virto B-30 10 NW O"
                description={
                  "Большое спасибо сотрудникам магазина — выбирала слуховой аппарат для мужа, они мне очень помогли, сама бы я запуталась в таком ассортименте. Удачи!"
                }
                image={image}
              />
            </SwiperSlide>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
