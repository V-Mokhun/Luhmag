import React from "react";
import FooterBottom from "../components/Footer/FooterBottom";
import FooterTop from "../components/Footer/FooterTop";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
          <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
