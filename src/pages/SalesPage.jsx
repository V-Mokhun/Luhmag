import React from "react";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import Sales from "../components/Sales/Sales";

const SalesPage = () => {
  return (
    <section className="sales-page">
      <Breadcrumps className="sales-page__breadcrumps">
        <BreadcrumpsItem>
          <span>Акции</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <Sales />
    </section>
  );
};

export default SalesPage;
