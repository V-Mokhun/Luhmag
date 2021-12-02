import React, { useState } from "react";

const QuestionsItem = ({ question, description }) => {
  const [active, setActive] = useState(false);

  return (
    <li
      className={`questions__item ${active ? "active" : ""}`}
      onClick={() => setActive((act) => !act)}
      tabIndex="0"
    >
      <div className="questions__question">{question}</div>
      <p className="questions__description">{description}</p>
    </li>
  );
};

export default QuestionsItem;
