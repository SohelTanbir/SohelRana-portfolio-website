import React from 'react';
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div className="skill">
            <div className="skill-heading comonStyle">
                <h2>My Skills</h2>
                <h4>What am I Know ?</h4>
            </div>
           <div className="container">
            <div className="row">
               <div className="technical-skills">
                    <span>HTML5</span>
                   <div className="html-skill comonSkill"></div>

                    <span>CSS3</span>
                   <div className="css3 comonSkill"></div>

                    <span>Javascript</span>
                   <div className="javascript comonSkill"></div>

                    <span>React js</span>
                   <div className="reactjs comonSkill"></div>

                    <span>Bootstrap</span>
                   <div className="bootstrap comonSkill"></div>
                   
               </div>
               <div className="technical-skills">
                    <span>jQuery</span>
                   <div className="jquery comonSkill"></div>
                    <span>SASS</span>
                   <div className="sass comonSkill"></div>
                    <span>Node js</span>
                   <div className="nodejs comonSkill"></div>
                    <span>Express js</span>
                   <div className="Expressjs comonSkill"></div>
                    <span>mongoDB</span>
                   <div className="mongodb comonSkill"></div>
               </div>
            </div>
            <div className="education-skills">
                <h2>Education skills</h2>
                <div className="container">
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
           </div>
          
        </div>
    );
};

export default Skills;