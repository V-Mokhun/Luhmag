import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CatalogThankModal from "../../modals/CatalogThankModal";
import { PRODUCT_ROUTE } from "../../routes/routes";

const CatalogItem = ({
  id,
  hit,
  sale,
  newItem,
  image,
  title,
  oldPrice,
  price,
  onAdd,
}) => {
  const productsCount = useSelector((state) => state.cart.products.length);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [thankModal, setThankModal] = useState(false);

  return (
    <>
      <li className="catalog__item item-catalog">
        <Link className="item-catalog__link" to={`${PRODUCT_ROUTE}/${id}`}>
          {(hit || sale || newItem) && (
            <ul className="item-catalog__tags">
              {hit && (
                <li className="item-catalog__tag item-catalog__tag--hit">
                  ХИТ!
                </li>
              )}
              {sale > 0 && (
                <li className="item-catalog__tag item-catalog__tag--sale">
                  -{sale}%
                </li>
              )}
              {newItem && (
                <li className="item-catalog__tag item-catalog__tag--new">
                  NEW
                </li>
              )}
            </ul>
          )}
          <div className="item-catalog__image">
            <img src={image} alt={title} />
          </div>
          <h4 className="item-catalog__title">{title}</h4>
          <div className="item-catalog__price">
            <span className="item-catalog__price-old">{oldPrice} ₽</span>
            <span className="item-catalog__price-new">{price} ₽</span>
          </div>
        </Link>
        <div className="item-catalog__actions">
          <button
            className="item-catalog__button item-catalog__button-buy"
            type="button"
          >
            Купить в 1 клик
          </button>
          <button
            className="item-catalog__button item-catalog__button-cart"
            type="button"
            onClick={() => {
              onAdd();
              setThankModal(true);
            }}
          >
            В корзину
          </button>
        </div>
      </li>
      <CatalogThankModal
        count={productsCount}
        totalPrice={totalPrice}
        show={thankModal}
        close={() => setThankModal(false)}
      />
    </>
  );
};

export default CatalogItem;
