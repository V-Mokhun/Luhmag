import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchWorkers } from "../../store/app/thunks";
import MyTitle from "../../ui/MyTitle";
import WorkersItem from "./WorkersItem";
import image from "../../assets/img/content/workers-1.jpg";
import Waves from "../Waves/Waves";

const Workers = () => {
  const workers = useSelector((state) => state.app.workers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkers());
  }, []);

  return (
    <section className="workers">
      <Waves className="workers__wave" />
      <div className="container">
        <MyTitle Component="h2" className="workers__title">
          Сотрудники магазина
        </MyTitle>
        <ul className="workers__list">
          {workers.length > 0 &&
            workers.map(({ name, position, email }) => (
              <WorkersItem
                key={name}
                name={name}
                position={position}
                email={email}
                image={image}
              />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Workers;
