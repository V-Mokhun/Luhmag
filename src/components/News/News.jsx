import React from "react";
import MyTitle from "../../ui/MyTitle";
import Slider from "../Slider/Slider";
import NewsItem from "./NewsItem";
import image from "../../assets/img/content/news-1.jpg";
import Waves from "../Waves/Waves";
import { SwiperSlide } from "swiper/react/swiper-react";

const News = () => {
  return (
    <section className="news">
      <Waves className="news__waves" />
      <div className="container">
        <MyTitle Component="h2" className="news__title">
          Новости
        </MyTitle>
        <div className="news__inner">
          <Slider>
            <SwiperSlide>
              <NewsItem
                image={image}
                date={"12.12.2019"}
                title={"Режим работы магазинов в Новогодние праздники!"}
                description={
                  "Уважаемые покупатели магазина bez-signala, от всей души поздравляем Вас с наступающим 2020 годом!"
                }
                id="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsItem
                image={image}
                date={"12.12.2019"}
                title={"Режим работы магазинов в Новогодние праздники!"}
                description={
                  "Уважаемые покупатели магазина bez-signala, от всей души поздравляем Вас с наступающим 2020 годом!"
                }
                id="2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsItem
                image={image}
                date={"12.12.2019"}
                title={"Режим работы магазинов в Новогодние праздники!"}
                description={
                  "Уважаемые покупатели магазина bez-signala, от всей души поздравляем Вас с наступающим 2020 годом!"
                }
                id="3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsItem
                image={image}
                date={"12.12.2019"}
                title={"Режим работы магазинов в Новогодние праздники!"}
                description={
                  "Уважаемые покупатели магазина bez-signala, от всей души поздравляем Вас с наступающим 2020 годом!"
                }
                id="4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsItem
                image={image}
                date={"12.12.2019"}
                title={"Режим работы магазинов в Новогодние праздники!"}
                description={
                  "Уважаемые покупатели магазина bez-signala, от всей души поздравляем Вас с наступающим 2020 годом!"
                }
                id="5"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsItem
                image={image}
                date={"12.12.2019"}
                title={"Режим работы магазинов в Новогодние праздники!"}
                description={
                  "Уважаемые покупатели магазина bez-signala, от всей души поздравляем Вас с наступающим 2020 годом!"
                }
                id="6"
              />
            </SwiperSlide>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default News;
