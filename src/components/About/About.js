import React from 'react';
import './About.css';
import myphoto from '../../images/myphoto/profile1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image">
                        <img src={myphoto} alt="Sohel Rana" />
                    </div>
                    <div className="about-details">
                        <h2 className="about-title">Who Am I?</h2>
                        <p className="about-intro">
                            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development
                            and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                        </p>
                        <p className="about-description">
                            My aim is to bring across your message and identity in the most creative way. I created web
                            design for many famous brand companies.
                        </p>

                        <h3 className="personal-info-title">Personal Info</h3>
                        <div className="personal-info-grid">
                            <div className="info-item">
                                <div className="info-icon phone">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Phone</span>
                                    <span className="info-value">+123 456 7890</span>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon email">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Email</span>
                                    <span className="info-value">Example@Mail.Com</span>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon location">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Location</span>
                                    <span className="info-value">Hong Kong China</span>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon birthday">
                                    <FontAwesomeIcon icon={faBirthdayCake} />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Birthday</span>
                                    <span className="info-value">May 27, 1990</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;