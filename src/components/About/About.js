import React from 'react';
import './About.css';
import myphoto from '../../images/myphoto/profile1.png'

const About = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Who am I?</h2>
                    <p className="section-lead">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                </div>
                <div className="row">
                    <div className="about-photo">
                        <img src={myphoto} alt="developer" />
                    </div>
                    <div className="about-info comonStyle">
                        <p>Hello,My Name is SohelRana. I am a Junior MERN Stack Developer.Specially I am expert on Front end Development.I have completed some Front end as well as  Back end Projects like as MobileCare, Doctor portal, travel-agency online Ticket booking,Calculator app,Timer app and many more. My Experties on HTML , Css, Javascript, React js ,Bootstrap, Node js, Express Js,MongoDB etc. I love to learn and work with new Technologies.
                            Thanks.
                        </p>
                        <button className="comonBtn">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;