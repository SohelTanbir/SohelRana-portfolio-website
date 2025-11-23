import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Blogs, CoreTechnologies, personalInfo } from "../../Data/Data";
import Social from "../Social/Social";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-inner container">
        <div className="footer-row">
          <div className="footer-col footer-about">
            <h3>About Me</h3>
            <p>{personalInfo.aboutMeShort}</p>
          </div>

          <div className="footer-col footer-stack">
            <h4>Core Skills</h4>
            <ul>
              {CoreTechnologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-blogs">
            <h4>Latest Blogs</h4>
            <ul>
              {Blogs.map((blog) => (
                <li key={blog.id}>
                  <a href={blog.link} target="_blank" rel="noreferrer">
                    {blog.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4>Contact</h4>
            <ul className="contact-list">
              <li>
                <a href={`tel:${personalInfo.phone}`}>
                  <FontAwesomeIcon icon={faPhone} />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <Social />
          <div className="copyright">
            All Rights Reserved by SOHEL RANA © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
