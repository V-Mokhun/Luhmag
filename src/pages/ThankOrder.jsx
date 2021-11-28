import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { HOME_ROUTE } from "../routes/routes";

const ThankOrder = () => {
  const city = useSelector((state) => state.user.city);
  const name = useSelector((state) => state.user.name);
  const phone = useSelector((state) => state.user.phone);
  const orderPrice = useSelector((state) => state.user.orderPrice);

  if (!name || !phone || !orderPrice) {
    return <Navigate to={HOME_ROUTE} />;
  }
  return (
    <div>
      THANK Order
      {name}
      {phone}
      {city}
      {orderPrice}
    </div>
  );
};

export default ThankOrder;
