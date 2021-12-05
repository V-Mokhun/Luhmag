import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react/swiper-react";
import { fetchSales } from "../../store/app/thunks";
import MyTitle from "../../ui/MyTitle";
import Slider from "../Slider/Slider";
import SalesItem from "./SalesItem";
import image from "../../assets/img/content/sales-1.jpg"

const SalesSlider = ({ activePageId }) => {
  const sales = useSelector((state) => state.app.sales);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sales.length > 0) return;

    dispatch(fetchSales());
  }, []);

  return (
    <section className="sales-slider">
      <div className="container">
        <MyTitle Component="h2" className="sales-slider__title">
          Другие Акции
        </MyTitle>
        <div className="sales-slider__inner">
          <Slider>
            {sales.length > 0 &&
              sales.map((item) => {
                if (item.id == activePageId) return;

                return (
                  <SwiperSlide key={item.id}>
                    <SalesItem
                      image={image}
                      date={item.date}
                      title={item.title}
                      isEnd={item.isEnd}
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

export default SalesSlider;
