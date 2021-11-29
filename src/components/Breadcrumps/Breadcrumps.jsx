import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/img/icons/home.svg";
import { HOME_ROUTE } from "../../routes/routes";
import BreadcrumpsItem from "./BreadcrumpsItem";

const Breadcrumps = ({ children, className }) => {
  return (
    <div className={`breadcrumps ${className ? className : ""}`}>
      <div className="container">
        <ul className="breadcrumps__list">
          <BreadcrumpsItem>
            <Link to={HOME_ROUTE}>
              <img src={homeIcon} alt="Главная" />
            </Link>
          </BreadcrumpsItem>
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumps;
