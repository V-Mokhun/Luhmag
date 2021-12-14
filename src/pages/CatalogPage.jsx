import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import CatalogPageContent from "../components/Catalog/CatalogPage/CatalogPageContent";
import { fetchProducts } from "../store/app/thunks";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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
