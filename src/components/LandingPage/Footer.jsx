import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h5
        className="logo footer-logo"
        onClick={() => {
          document.getElementById("header").scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Africana
      </h5>

      <div className="footer-links">
        <p>Privacy Policy</p>
        <p>Terms of service</p>
        <p>Branding</p>
        <p>Contact</p>
        <p>Branding</p>
      </div>
      <div className="footer-sociahhandles">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
      </div>
    </footer>
  );
};

export default Footer;
