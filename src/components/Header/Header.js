import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const HideMenu = () => {
       document.getElementById("nav").style.display= 'block';
       document.getElementById("bars").style.display= 'none'
       document.getElementById("times").style.display= 'block'
    }
    const showMenu = () => {
        document.getElementById("nav").style.display= 'none';
       document.getElementById("bars").style.display= 'block'
       document.getElementById("times").style.display= 'none'
    }
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <Link to="/">Sohel <span>Rana</span></Link>
                    </div>
                    <div className="menu">
                        <div className="navbar" id="nav">
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/skills">Skills</Link>
                                </li>
                                <li>
                                    <Link to="/projects">Projects</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-menu">
                        <span id="bars" onClick={HideMenu}><FontAwesomeIcon icon={faBars} /></span>
                        <span id="times" onClick={showMenu}><FontAwesomeIcon icon={faTimes} /></span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;