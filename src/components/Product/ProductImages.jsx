import React from "react";
import image from "../../assets/img/content/product-1.jpg";
import ProductSlider from "./ProductSlider";
import ProductSliderItem from "./ProductSliderItem";
import { SwiperSlide } from "swiper/react/swiper-react";

const PRODUCT_IMAGES = [
  {
    id: 1,
    image,
  },
  {
    id: 2,
    image,
  },
  {
    id: 3,
    image,
  },
  {
    id: 4,
    image,
  },
  {
    id: 5,
    image,
  },
];

const ProductImages = () => {
  return (
    <div className="product__slider">
      <ProductSlider>
        {PRODUCT_IMAGES.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductSliderItem image={item.image} />
          </SwiperSlide>
        ))}
      </ProductSlider>
    </div>
  );
};

export default ProductImages;
