import React from "react";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import OrderCall from "../components/Call/OrderCall";

const Cart = () => {
  return (
    <section className="cart">
      <Breadcrumps className={"cart__breadcrumps"}>
        <BreadcrumpsItem>
          <span>Корзина</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <OrderCall />
    </section>
  );
};

export default Cart;
