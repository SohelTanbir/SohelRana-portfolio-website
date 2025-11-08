import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faHome, faUser, faCode, faBriefcase, faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const openMenu = () => {
        document.getElementById("nav").classList.add('active');
        document.getElementById("overlay").classList.add('active');
    }
    const closeMenu = () => {
        document.getElementById("nav").classList.remove('active');
        document.getElementById("overlay").classList.remove('active');
    }

    const scrollToSection = (sectionId) => {
        closeMenu();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <div className="header">
            <div className="container">
                <div className="row header-row">
                    <div className="logo">
                        <Link to="/" onClick={() => scrollToSection('home')}>Sohel<span>Rana</span></Link>
                    </div>
                    <div className="menu">
                        <div className="navbar" id="nav">
                            <div className="mobile-menu-header">
                                <div className="mobile-logo">
                                    <Link to="/" onClick={() => scrollToSection('home')}>Sohel<span>Rana</span></Link>
                                </div>
                                <span className="close-btn" onClick={closeMenu}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                            </div>
                            <ul>
                                <li>
                                    <a href="#home" className="nav-btn" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                                        <FontAwesomeIcon icon={faHome} /> Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="nav-btn" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                                        <FontAwesomeIcon icon={faUser} /> About
                                    </a>
                                </li>
                                <li>
                                    <a href="#skills" className="nav-btn" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                                        <FontAwesomeIcon icon={faCode} /> Resume
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects" className="nav-btn" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                                        <FontAwesomeIcon icon={faBriefcase} /> Works
                                    </a>
                                </li>
                                <li>
                                    <a href="#blog" className="nav-btn" onClick={(e) => { e.preventDefault(); scrollToSection('blog'); }}>
                                        <FontAwesomeIcon icon={faBlog} /> Blogs
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="nav-btn" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                                        <FontAwesomeIcon icon={faEnvelope} /> Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-menu">
                        <span id="bars" onClick={openMenu}><FontAwesomeIcon icon={faBars} /></span>
                    </div>
                </div>
            </div>
            <div className="menu-overlay" id="overlay" onClick={closeMenu}></div>
        </div>
    );
};

export default Header;