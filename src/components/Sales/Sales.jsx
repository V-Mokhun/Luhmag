import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSales } from "../../store/app/thunks";
import SalesItem from "./SalesItem";
import image from "../../assets/img/content/sales-1.jpg";
import MyTitle from "../../ui/MyTitle";

const Sales = () => {
  const sales = useSelector((state) => state.app.sales);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sales.length > 0) return;

    dispatch(fetchSales());
  }, []);

  return (
    <section className="sales">
      <div className="container">
        <MyTitle Component="h1" className="sales__title">
          Акции
        </MyTitle>
        <div className="sales__inner">
          {sales.length > 0 &&
            sales.map((sale) => (
              <SalesItem
                key={sale.id}
                id={sale.id}
                image={image}
                date={sale.date}
                title={sale.title}
                isEnd={sale.isEnd}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Sales;
