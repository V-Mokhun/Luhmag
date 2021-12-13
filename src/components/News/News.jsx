import React, { useEffect } from "react";
import MyTitle from "../../ui/MyTitle";
import Slider from "../Slider/Slider";
import NewsItem from "./NewsItem";
import image from "../../assets/img/content/news-1.jpg";
import Waves from "../Waves/Waves";
import { SwiperSlide } from "swiper/react/swiper-react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../store/app/thunks";
import { useSelector } from "react-redux";

const News = ({ activePageId }) => {
  const news = useSelector((state) => state.app.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <section className="news">
      <Waves className="news__waves" />
      <div className="container">
        <MyTitle Component="h2" className="news__title">
          Новости
        </MyTitle>
        <div className="news__inner">
          <Slider>
            {news.length > 0 &&
              news.map((item) => {
                if (item.id == activePageId) return;

                return (
                  <SwiperSlide key={item.id}>
                    <NewsItem
                      image={image}
                      date={item.date}
                      title={item.title}
                      description={item.description}
                      id={item.id}
                    />
                  </SwiperSlide>
                );
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default News;
