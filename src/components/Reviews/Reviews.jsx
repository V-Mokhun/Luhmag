import React, { useEffect } from "react";
import MyTitle from "../../ui/MyTitle";
import ReviewsItem from "./ReviewsItem";
import image from "../../assets/img/content/reviews-1.svg";
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react/swiper-react";
import { fetchReviews } from "../../store/app/thunks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Reviews = () => {
  const reviews = useSelector((state) => state.app.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, []);

  return (
    <section className="reviews">
      <div className="container">
        <MyTitle Component="h2" className="reviews__title">
          Отзывы
        </MyTitle>
        <div className="reviews__inner">
          <Slider className="reviews__slider">
            {reviews.length > 0 &&
              reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <ReviewsItem
                    name={review.name}
                    device={review.device}
                    description={review.description}
                    image={image}
                  />
                </SwiperSlide>
              ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
