import React, { useState } from "react";

const CatalogPageFilterItem = ({ name }) => {
  const [active, setActive] = useState(false);

  return (
    <li className={`catalog-page__filter-item ${active ? "active" : ""}`}>
      <button
        onClick={() => setActive((prev) => !prev)}
        type="button"
        className="catalog-page__filter-btn"
      >
        {name}
      </button>
    </li>
  );
};

export default CatalogPageFilterItem;
