import React from "react";
import { useEffect } from "react";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import OrderCall from "../components/Call/OrderCall";
import Cart from "../components/Cart/Cart";

const CartPage = () => {
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
      <Cart />
      <OrderCall />
    </section>
  );
};

export default CartPage;
