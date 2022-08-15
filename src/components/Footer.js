import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";
import logoesh from "./assets/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="social-container">
      <div>
        <img src={logoesh} alt="footer logo" className="footerlogo" />
      </div>
      <div className="footering">
        <p className="arfooter">© AR RoadRunners, 2022. </p>
        <p className="arfooters">All rights reserved.</p>
      </div>
      <div>
        <div className="components-work">
          <NavLink to="/">Home</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="contact">Contact Us</NavLink>
        </div>
      </div>
      <div className="sociallife">
        <a
          href="https://twitter.com/roadrunners_ar"
          target="_blank"
          className="twitter social"  
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/roadrunners_carwash/"
          className="instagram social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wa.me/919845809350" className="=whatsapp social" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
