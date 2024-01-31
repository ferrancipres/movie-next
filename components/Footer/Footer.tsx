import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import Link from "next/link";

function Footer() {
  return (
    <div className="section__container">
      <footer className="footer-container">
        <section className="social-icons">
          <Link className="icon-social" href="#red-social-1" target="_blank">
            <FaFacebook />
          </Link>
          <Link className="icon-social" href="#red-social-2" target="_blank">
            <FaTwitter />
          </Link>
          <Link className="icon-social" href="#red-social-3" target="_blank">
            <FaInstagram />
          </Link>
        </section>
        <section className="info-wrapper">
          <p>Conditions of use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </section>
        <section className="rights-wrapper">
          <p>© 2023 Movie Tracker by Ferran at AIT</p>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
