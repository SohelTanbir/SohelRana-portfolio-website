import React from 'react';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import TypedText from '../TypedText/TypedText';
import { personalInfo } from '../../Data/Data';

const Banner = () => {
    return (
        <div className="banner" id="home">
            <div className="banner-container">
                <div className="banner-content">
                    <div className="profile-image-wrapper">
                        <div className="profile-image">
                            <img src="/assets/images/profile/sohelrana-profile.jpg" alt="Sohel Rana" />
                        </div>
                    </div>

                    <h1 className="profile-name">{personalInfo.name}</h1>
                    <TypedText />

                    <div className="social-links">
                        <a href={personalInfo.facebook} target="_blank" rel="noreferrer" className="social-icon facebook">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="social-icon twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-icon instagram">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon linkedin">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>

                    <a
                        href={personalInfo.resume}
                        download="Sohel_Rana_Resume.pdf"
                        className="download-cv-btn"
                    >
                        <FontAwesomeIcon icon={faDownload} /> Download CV
                    </a>
                </div>
            </div>

            <div className="decorative-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <div className="line line-4"></div>
                <div className="line line-5"></div>
                <div className="line line-6"></div>
            </div>
        </div>
    );
};

export default Banner;