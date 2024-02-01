import "./Footer.css";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="section__container">
      <footer className="footer__container">
        <section className="social__icons">
          <Link className="icon__social" href="#red-social-1" target="_blank">
            <FaFacebook />
          </Link>
          <Link className="icon__social" href="#red-social-2" target="_blank">
            <FaTwitter />
          </Link>
          <Link className="icon__social" href="#red-social-3" target="_blank">
            <FaInstagram />
          </Link>
        </section>
        <section className="info__wrapper">
          <p>Conditions</p>
          <p>Privacy & Policy</p>
          <p>Press room</p>
        </section>
        <section className="rights__wrapper">
          <p>© 2023 Movie Tracker by Ferran at AIT</p>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
