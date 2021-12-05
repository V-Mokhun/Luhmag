import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import NewsItem from "../components/News/NewsItem";
import { fetchNews } from "../store/app/thunks";
import MyTitle from "../ui/MyTitle";
import image from "../assets/img/content/news-1.jpg";

const News = () => {
  const news = useSelector((state) => state.app.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <section className="news-page">
      <Breadcrumps className="news-page__breadcrumps">
        <BreadcrumpsItem>
          <span>Доставка и оплата</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <div className="news-page__content">
        <div className="container">
          <MyTitle Component="h1" className="news-page__title">
            Новости
          </MyTitle>
          <div className="news-page__inner">
            {news.length > 0 &&
              news.map((item) => (
                <NewsItem
                  className="news-page__item"
                  key={item.id}
                  image={image}
                  date={item.date}
                  title={item.title}
                  description={item.description}
                  id={item.id}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
