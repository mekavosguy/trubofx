import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Join Now and start your journey to becoming a confident and
            successful trader!
          </p>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+917907403509</li>
            <li>Insta : turbofxbootcampkerala</li>
            <li>turbofxbootcamp@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ TurboFX BootCamp - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
