import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import { fetchOneNews } from "../store/app/thunks";
import News from "../components/News/News";
import MyTitle from "../ui/MyTitle";

const NewsItem = () => {
  const { id } = useParams();
  const [oneNews, setOneNews] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneNews(id)).then((data) => setOneNews(data.payload));
  }, [id]);

  return (
    <section className="one-news">
      <Breadcrumps className="one-news__breadcrumps">
        <BreadcrumpsItem>
          <span>Новость</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <div className="one-news__content">
        <div className="container">
          <div className="one-news__item">
            {oneNews?.id && (
              <>
                <MyTitle Component="h1" className="one-news__title">
                  {oneNews.title}
                </MyTitle>
                <p className="one-news__description">
                  {oneNews.fullDescription}
                </p>
                <time dateTime={oneNews.date} className="one-news__date">
                  {oneNews.date}
                </time>
              </>
            )}
          </div>
        </div>
      </div>
      <News activePageId={id} />
    </section>
  );
};

export default NewsItem;
