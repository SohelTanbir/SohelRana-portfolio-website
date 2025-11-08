import React from 'react';
import './Banner.css';
import bannerImage from '../../images/banner/banner-illustration.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import TypedText from '../TypedText/TypedText';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="banner-text col-50">
                        <h1> <span>Hi, I am</span> <br />Sohel Rana </h1>
                        <h2> <TypedText /></h2>
                        <p>My Name is SohelRana. I am a Front-end Web Developer. I have been working with web design and development more than three years. In these three years I have completed many Website Project.</p>
                        <div className="social-top">
                            <ul>
                                <li>

                                    <a href="https://www.linkedin.com/in/sohel-rana-b97445200/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                </li>
                                <li>
                                    <a href="https://github.com/SohelTanbir" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/MdSohel75691976" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                                </li>

                            </ul>
                        </div>
                        <a href="https://drive.google.com/file/d/1FO1wbDbHwJr3J7EHsRdHWBz9IBZNYHRV/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
                            <button className="comonBtn">Download CV <FontAwesomeIcon icon={faDownload} /></button>
                        </a>

                        <button className="comonBtn">Contact me</button>
                    </div>
                    <div className="banner-image col-50">
                        <img src={bannerImage} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;