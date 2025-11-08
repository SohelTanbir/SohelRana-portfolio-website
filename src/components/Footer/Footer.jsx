import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-inner container">
        <div className="footer-row">
          <div className="footer-col footer-contact">
            <h3>Let's Talk!</h3>
            <h4>Contact Info</h4>
            <p>closerpage@email.com</p>
            <p>12 Hilton St, Manchester M1 1JF</p>
            <p>+44 012 34 5678</p>
          </div>

          <div className="footer-col footer-links">
            <h4>What I Do?</h4>
            <ul>
              <li>The Studio</li>
              <li>Sponsoring</li>
              <li>Newsletter</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-col footer-links">
            <h4>News</h4>
            <ul>
              <li>Hot Stuff</li>
              <li>Perfect Place</li>
              <li>Vintage</li>
              <li>Products</li>
            </ul>
          </div>

          <div className="footer-col footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>Style</li>
              <li>Health</li>
              <li>Relationship</li>
              <li>Legal & Privacy</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <div className="copyright">
            Next.js Site Template for Agency and Portfolio - © 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
