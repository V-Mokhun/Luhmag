import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import Recommendation from "../components/Recommendation/Recommendation";
import { fetchOneProduct } from "../store/app/thunks";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneProduct(id)).then((data) => setProduct(data.payload));
  }, [id]);

  return (
    <section className="product-page">
      <Breadcrumps className={"product-page__breadcrumps"}>
        <BreadcrumpsItem>
          <span>{product.title}</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <Recommendation activePageId={product.id} />
    </section>
  );
};

export default ProductPage;
