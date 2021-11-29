import React from "react";
import "swiper/swiper.scss";

// Import Swiper React components
import { Navigation, Pagination } from "swiper";

import { Swiper } from "swiper/react/swiper-react";

const Slider = ({ className, children, ...props }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      <Swiper
        className={`slider ${className ? className : ""}`}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          clickable: true,
          type: "bullets",
          renderBullet: (index, className) =>
            `<span class="${className} slider__pagination-bullet">${
              index + 1
            }</span>`,
        }}
        onInit={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }, 0);
        }}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        {...props}
      >
        {children}
      </Swiper>
      <button
        ref={navigationPrevRef}
        type="button"
        className={`slider__button slider__button-prev ${
          className ? `${className}__button ${className}__button-prev` : ""
        }`}
      />
      <button
        ref={navigationNextRef}
        type="button"
        className={`slider__button slider__button-next ${
          className ? `${className}__button ${className}__button-next` : ""
        }`}
      />
    </>
  );
};

export default Slider;
