import React from "react";
import MyTitle from "../../ui/MyTitle";
import image from "../../assets/img/content/catalog-1.png";
import CatalogItem from "./CatalogItem";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartReducer";

const PRODUCTS = [
  {
    id: 1,
    hit: true,
    sale: 10,
    newItem: true,
    image,
    title: "Слуховой аппарат Virto B-30 10 NW O (для детей и подростков)",
    oldPrice: 15050,
    price: 13350,
  },
  {
    id: 2,
    hit: true,
    sale: 10,
    newItem: false,
    image,
    title: "Слуховой аппарат XM-900A",
    oldPrice: 17500,
    price: 15750,
  },
  {
    id: 3,
    hit: true,
    sale: 0,
    newItem: false,
    image,
    title: "Слуховой аппарат XM-900A",
    oldPrice: 17500,
    price: 15750,
  },
  {
    id: 4,
    hit: true,
    sale: 0,
    newItem: false,
    image,
    title: "Слуховой аппарат Virto B-30 10 NW O (для детей и подростков)",
    oldPrice: 15050,
    price: 13350,
  },
  {
    id: 5,
    hit: true,
    sale: 10,
    newItem: true,
    image,
    title: "Слуховой аппарат Virto B-30 10 NW O (для детей и подростков)",
    oldPrice: 15050,
    price: 13350,
  },
  {
    id: 6,
    hit: true,
    sale: 10,
    newItem: false,
    image,
    title: "Слуховой аппарат XM-900A",
    oldPrice: 17500,
    price: 15750,
  },
  {
    id: 7,
    hit: true,
    sale: 0,
    newItem: false,
    image,
    title: "Слуховой аппарат XM-900A",
    oldPrice: 17500,
    price: 15750,
  },
  {
    id: 8,
    hit: true,
    sale: 0,
    newItem: false,
    image,
    title: "Слуховой аппарат Virto B-30 10 NW O (для детей и подростков)",
    oldPrice: 15050,
    price: 13350,
  },
  {
    id: 9,
    hit: true,
    sale: 10,
    newItem: true,
    image,
    title: "Слуховой аппарат Virto B-30 10 NW O (для детей и подростков)",
    oldPrice: 15050,
    price: 13350,
  },
  {
    id: 10,
    hit: true,
    sale: 10,
    newItem: false,
    image,
    title: "Слуховой аппарат XM-900A",
    oldPrice: 17500,
    price: 15750,
  },
  {
    id: 11,
    hit: true,
    sale: 0,
    newItem: false,
    image,
    title: "Слуховой аппарат XM-900A",
    oldPrice: 17500,
    price: 15750,
  },
  {
    id: 12,
    hit: true,
    sale: 0,
    newItem: false,
    image,
    title: "Слуховой аппарат Virto B-30 10 NW O (для детей и подростков)",
    oldPrice: 15050,
    price: 13350,
  },
];

const Catalog = () => {
  const dispatch = useDispatch();

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
          {PRODUCTS.map((product) => {
            const { id, hit, sale, newItem, image, title, oldPrice, price } =
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
                }}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
