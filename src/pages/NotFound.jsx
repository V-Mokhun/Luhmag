import React from "react";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import NotFoundContent from "../components/NotFound/NotFoundContent";
import image from "../assets/img/content/not-found.png";
import NotFoundImage from "../components/NotFound/NotFoundImage";

const NotFound = () => {
  return (
    <>
      <Breadcrumps className="not-found__breadcrumps">
        <BreadcrumpsItem>
          <span>Ошибка</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <section className="not-found">
        <div className="not-found__container container">
          <div className="not-found__inner">
            <NotFoundImage image={image} />
            <NotFoundContent />
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
