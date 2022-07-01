import React from 'react';
import './Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
    return (
        <div className="education-skills">
        <div className="container">
        <h2>Educational Qualification</h2>
            <div className="row">
                <div className="diploma-course">
                    <h3>Diploma in Computer Engineering</h3>
                    <h4>Thakurgaon Polytechnic Institute</h4>
                    <p>08 August 2017 - 31 March 2021</p>
                    <p>Session : 2017-18</p>
                    <p>Duration : 4 years</p>
                    <p>CGPA : 3.81 (out of 4)</p>
                    <div className="circle">
                        <span><FontAwesomeIcon icon={faGraduationCap}/></span>
                    </div>
                </div>
                <div className="SSC-course">
                    <h3>Secondary School Certificate (SSC)</h3>
                    <h4>Technical Training Center,Thakurgaon</h4>
                    <p>Trade : General Electrical Works</p>
                    <p>Years : 2015 - 2016</p>
                    <p>Duration: 2 years</p>
                    <p>GPA : 5 (out of 5)</p>
                    <div className="circle">
                        <span><FontAwesomeIcon icon={faGraduationCap}/></span>
                    </div>
                </div>
                <div className="JSC-course">
                <h3>Junior School Certificate (JSC)</h3>
                    <h4>Dewly Araji Laskara High School</h4>
                    <p>division: Science</p>
                    <p>Years : 2012 - 2014</p>
                    <p>Duration: 3 years</p>
                    <p>GPA : 4.06 (out of 5)</p>
                    <div className="circle">
                        <span><FontAwesomeIcon icon={faGraduationCap}/></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Education;