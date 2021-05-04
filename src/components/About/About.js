import React from 'react';
import './About.css';
import myphoto from '../../images/myphoto/profile1.png'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="about-photo">
                        <img src={myphoto} alt="developer"/>
                    </div>
                    <div className="about-info comonStyle">
                       <h2>About me</h2>
                       <h4>Who am I ?</h4>
                       <p>Hello,My Name is SohelRana. I am a MERN Stack Web Developer. I have been working with web design and development more than three years. In these three years I have completed many Website Project.like as MobileCare, Doctor portal, travel-agency online Ticket booking,Calculator app,Timer app and many more. My Experties on HTML , Css, Javascript, React js ,Bootstrap, Node js, Express Js,MongoDB etc.I always try to prove my skills by doing project.I am also curious to learn new things</p>
                       <button className="comonBtn">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;