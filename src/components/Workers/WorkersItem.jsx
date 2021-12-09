import React from "react";

const WorkersItem = ({ image, name, position, email }) => {
  return (
    <li className="workers__item item-workers">
      <div className="item-workers__image">
        <img src={image} alt={name} />
      </div>
      <div className="item-workers__name">{name}</div>
      <span className="item-workers__position">{position}</span>
      <div className="item-workers__link-wrapper">
        <a className="item-workers__link" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </li>
  );
};

export default WorkersItem;
