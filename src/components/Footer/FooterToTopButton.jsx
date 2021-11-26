import React from "react";

const FooterToTopButton = () => {
  const handleClick = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className="bottom-footer__button to-top__button"
      onClick={handleClick}
    ></button>
  );
};

export default FooterToTopButton;
