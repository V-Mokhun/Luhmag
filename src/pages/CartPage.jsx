import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import OrderCall from "../components/Call/OrderCall";
import Cart from "../components/Cart/Cart";
import ConsultationChoice from "../components/Consultation/ConsultationChoice/ConsultationChoice";
import Order from "../components/Order/Order";

const CartPage = () => {
  const hasProducts = useSelector((state) => state.cart.products).length > 0;

  useEffect(() => {
    if (document.body.classList.contains("lock")) {
      document.body.classList.remove("lock");
    }
  }, []);

  return (
    <section className="cart-page">
      <Breadcrumps className={"cart-page__breadcrumps"}>
        <BreadcrumpsItem>
          <span>Корзина</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <Cart hasProducts={hasProducts} />
      <OrderCall />
      {hasProducts ? (
        <Order />
      ) : (
        <ConsultationChoice className={"cart-page__choice-consultation"} />
      )}
    </section>
  );
};

export default CartPage;
