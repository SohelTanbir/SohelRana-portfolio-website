import React from 'react';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import TypedText from '../TypedText/TypedText';

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

                    <h1 className="profile-name">Sohel Rana</h1>
                    <TypedText />

                    <div className="social-links">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-icon facebook">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://twitter.com/MdSohel75691976" target="_blank" rel="noreferrer" className="social-icon twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://github.com/SohelTanbir" target="_blank" rel="noreferrer" className="social-icon instagram">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/sohel-rana-b97445200/" target="_blank" rel="noreferrer" className="social-icon linkedin">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>

                    <a href="https://drive.google.com/file/d/1FO1wbDbHwJr3J7EHsRdHWBz9IBZNYHRV/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="download-cv-btn">
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