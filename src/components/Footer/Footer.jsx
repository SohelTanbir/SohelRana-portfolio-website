import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-inner container">
        <div className="footer-row">
          <div className="footer-col footer-about">
            <h3>About Me</h3>
            <p>
              I am a passionate MERN Stack Developer specializing in building
              modern web applications. I love creating elegant solutions and
              bringing ideas to life through code.
            </p>
          </div>

          <div className="footer-col footer-stack">
            <h4>Tech Stack</h4>
            <ul>
              <li>MERN Stack</li>
              <li>React / Next.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="footer-col footer-blogs">
            <h4>Latest Blogs</h4>
            <ul>
              <li>Why I Switched to Sketch For UI Design</li>
              <li>Best Practices for Animated Progress Indicators</li>
              <li>Designing the Perfect Feature Comparison Table</li>
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Contact</h4>
            <ul className="contact-list">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <span>+44 012 34 5678</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>closerpage@email.com</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>12 Hilton St, Manchester M1 1JF</span>
              </li>
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
            © 2025 All Rights Reserved by SOHEL RANA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
