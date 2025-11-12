import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { personalInfo } from '../../Data/Data';


const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-lead">Looking to build something amazing? I design and develop custom web solutions that turn creative ideas into engaging digital realities.</p>
        </div>

        <div className="contact-content">
          {/* Left: Contact Info */}
          <div className="contact-info-column">
            <div className="contact-info-card">
              <div className="contact-info-icon phone">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Phone</span>
                <span className="contact-info-value">{personalInfo.phone}</span>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon email">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">{personalInfo.email}</span>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon location">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-column">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-col-50">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form-col-50">
                  <input type="email" placeholder="Email" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-col-100">
                  <input type="text" placeholder="Phone (Optional)" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-col-100">
                  <textarea placeholder="Message"></textarea>
                </div>
              </div>

              <div className="form-submit">
                <button type="submit" className="submit-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;