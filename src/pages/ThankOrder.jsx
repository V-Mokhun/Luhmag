import React from "react";
import Thank from "../components/Thank/Thank";
import image from "../assets/img/content/thanks-order.png";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";

const ThankOrder = () => {
  return (
    <>
      <Breadcrumps className="thank__breadcrumps">
        <BreadcrumpsItem>
          <span>Спасибо</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <Thank isContact={false} image={image} titleText="Спасибо за заказ" />
    </>
  );
};

export default ThankOrder;
