import React from "react";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import CatalogPageContent from "../components/Catalog/CatalogPage/CatalogPageContent";

const CatalogPage = () => {
  return (
    <div className="catalog-page">
      <Breadcrumps className={"catalog-page__breadcrumps"}>
        <BreadcrumpsItem>
          <span>Каталог</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <CatalogPageContent />
    </div>
  );
};

export default CatalogPage;
