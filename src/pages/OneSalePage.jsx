import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Breadcrumps from "../components/Breadcrumps/Breadcrumps";
import BreadcrumpsItem from "../components/Breadcrumps/BreadcrumpsItem";
import SalesSlider from "../components/Sales/SalesSlider";
import { fetchOneSale } from "../store/app/thunks";
import image from "../assets/img/content/sales-big-1.jpg";
import MyTitle from "../ui/MyTitle";

const OneSalePage = () => {
  const { id } = useParams();
  const [oneSale, setOneSale] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneSale(id)).then((data) => setOneSale(data.payload));
  }, [id]);

  return (
    <section className="one-sale">
      <Breadcrumps className="sales-page__breadcrumps">
        <BreadcrumpsItem>
          <span>Акция</span>
        </BreadcrumpsItem>
      </Breadcrumps>
      <div className="one-sale__content">
        <div className="container">
          <div className="one-sale__item">
            {oneSale?.id && (
              <>
                <MyTitle Component="h1" className="one-sale__title">
                  {oneSale.title}
                </MyTitle>
                <div className="one-sale__image">
                  <img src={image} alt={oneSale.title} />
                </div>
                <p className="one-sale__description">
                  {oneSale.fullDescription}
                </p>
                <p className="one-sale__end">
                  Акция действует: <span>{oneSale.endsAt}</span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <SalesSlider activePageId={id} />
    </section>
  );
};

export default OneSalePage;
