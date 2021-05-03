import React from 'react';
import './Banner.css';
import bannerImage from '../../images/banner/banner-illustration.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="banner-text">
                        <h1> <span>Hi, I am</span> <br/>Sohel Rana </h1>
                        <h2>I am a Front-end Developer</h2>
                        <p>My Name is SohelRana. I am a Front-end Web Developer. I have been working with web design and development more than three years. In these three years I have completed many Website Project.</p>
                        <div className="social-top">
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/sohel-rana-b97445200/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                </li>
                                <li>
                                    <a href="https://github.com/SohelTanbir" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/MdSohel75691976" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                                </li>
                                <li>
                                    <a href="#" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                                </li>
                               
                            </ul>
                        </div>
                        <a href="https://drive.google.com/uc?export=download&id=1fo_gSFZXzK1r9aFasAcRToMc4BAKfKMG">
                        <button>Download CV <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></button>
                        </a>
        
                        <button>Contact me</button>
                    </div>
                    <div className="banner-image">
                        <img src={bannerImage} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;