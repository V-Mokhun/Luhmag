import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react/swiper-react";

const ProductSlider = ({ children }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      <Swiper
        className={`slider`}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          type: "custom",
          renderCustom: (swiper, current, total) => {
            return `
              <span class="swiper-pagination-current">
                ${current > 9 ? current : `0${current}`}
              </span>
              /
              <span class="swiper-pagination-total">
                ${total > 9 ? total : `0${total}`}
              </span>
            `;
          },
        }}
        onInit={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }, 0);
        }}
        breakpoints={{}}
      >
        {children}
        <button
          ref={navigationPrevRef}
          type="button"
          className={`slider__button slider__button-prev product__slider-button`}
        />
        <button
          ref={navigationNextRef}
          type="button"
          className={`slider__button slider__button-next product__slider-button`}
        />
      </Swiper>
    </>
  );
};

export default ProductSlider;
