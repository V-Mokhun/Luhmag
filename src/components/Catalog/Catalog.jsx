import React, { useState } from "react";
import MyTitle from "../../ui/MyTitle";
import image from "../../assets/img/content/catalog-1.png";
import CatalogItem from "./CatalogItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart/cartReducer";
import MyButton from "../../ui/MyButton";
import { Link } from "react-router-dom";
import { CATALOG_ROUTE } from "../../routes/routes";
import CatalogThankModal from "../../modals/CatalogThankModal/CatalogThankModal";
import { useEffect } from "react";
import { fetchProducts } from "../../store/app/thunks";

const Catalog = () => {
  const [thankModal, setThankModal] = useState(false);

  const products = useSelector((state) => state.app.products);
  const productsCount = useSelector((state) => state.cart.productsCount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className="catalog">
      <div className="catalog__wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="catalog__shape-fill"
          ></path>
        </svg>
      </div>
      <div className="container">
        <MyTitle Component="h2" className="catalog__title">
          Каталог
        </MyTitle>
        <ul className="catalog__list">
          {products &&
            products.length > 0 &&
            products.map((product) => {
              const { id, hit, sale, newItem, title, oldPrice, price } =
                product;

              return (
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
              );
            })}
        </ul>
        <div className="catalog__link-wrapper">
          <MyButton
            Component={Link}
            to={CATALOG_ROUTE}
            className="catalog__link"
          >
            Посмотреть все слуховые аппараты
          </MyButton>
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

export default Catalog;
