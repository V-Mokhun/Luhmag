import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import MyTitle from "../../ui/MyTitle";
import ThankContent from "./ThankContent";
import ThankImage from "./ThankImage";

const Thank = ({ isContact, titleText, image }) => {
  const city = useSelector((state) => state.user.city);
  const name = useSelector((state) => state.user.name);
  const phone = useSelector((state) => state.user.phone);
  const orderPrice = useSelector((state) => state.user.orderPrice);

  if (!name || !phone || !orderPrice) {
    return <Navigate to={HOME_ROUTE} />;
  }
  return (
    <section className="thank">
      <div className="thank__container container">
        <MyTitle className="thank__title" Component="h1">
          {titleText}
        </MyTitle>
        <div className="thank__inner">
          <ThankImage image={image} />
          <ThankContent
            name={name}
            city={city}
            phone={phone}
            orderPrice={orderPrice}
            isContact={isContact}
          />
        </div>
      </div>
    </section>
  );
};

export default Thank;
