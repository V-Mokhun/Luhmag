import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react/swiper-react";
import { fetchProducts } from "../../store/app/thunks";
import MyTitle from "../../ui/MyTitle";
import Slider from "../Slider/Slider";
import image from "../../assets/img/content/catalog-1.png";
import CatalogItem from "../Catalog/CatalogItem";
import { addToCart } from "../../store/cart/cartReducer";
import CatalogThankModal from "../../modals/CatalogThankModal/CatalogThankModal";

const Recommendation = ({ activePageId }) => {
  const [thankModal, setThankModal] = useState(false);
  const products = useSelector((state) => state.app.products);
  const productsCount = useSelector((state) => state.cart.productsCount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className="recommendation">
      <div className="container">
        <MyTitle Component={"h2"} className={"recommendation__title"}>
          Рекомендуем также
        </MyTitle>
        <div className="recommendation__inner">
          <Slider className={"recommendation__slider"}>
            {products &&
              products.length > 0 &&
              products.map((product, idx) => {
                if (product.id == activePageId || idx > 6) return;

                const { id, hit, sale, newItem, title, oldPrice, price } =
                  product;

                return (
                  <SwiperSlide key={product.id}>
                    <CatalogItem
                      key={id}
                      id={id}
                      hit={hit}
                      sale={sale}
                      newItem={newItem}
                      image={image}
                      title={title}
                      oldPrice={oldPrice}
                      price={price}
                      onAdd={() => {
                        dispatch(
                          addToCart({
                            id,
                            image,
                            title,
                            price,
                          })
                        );
                        setThankModal(true);
                      }}
                    />
                  </SwiperSlide>
                );
              })}
          </Slider>
        </div>
      </div>
      <CatalogThankModal
        count={productsCount}
        totalPrice={totalPrice}
        show={thankModal}
        close={() => setThankModal(false)}
      />
    </section>
  );
};

export default Recommendation;
