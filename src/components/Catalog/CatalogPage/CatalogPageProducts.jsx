import React, { useState } from "react";
import { useSelector } from "react-redux";
import CatalogItem from "../CatalogItem";
import image from "../../../assets/img/content/catalog-1.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cart/cartReducer";
import CatalogThankModal from "../../../modals/CatalogThankModal/CatalogThankModal";

const CatalogPageProducts = () => {
  const [thankModal, setThankModal] = useState(false);

  const products = useSelector((state) => state.app.products);
  const productsCount = useSelector((state) => state.cart.productsCount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  return (
    <>
      <ul className="catalog-page__products catalog__list">
        {products &&
          products.length > 0 &&
          products.map((product) => {
            const { id, hit, sale, newItem, title, oldPrice, price } = product;

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
      <CatalogThankModal
        count={productsCount}
        totalPrice={totalPrice}
        show={thankModal}
        close={() => setThankModal(false)}
      />
    </>
  );
};

export default CatalogPageProducts;
