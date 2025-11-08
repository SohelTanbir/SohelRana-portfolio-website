import React from "react";
import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Education = () => (
  <section className="edu-skills-section">
    <div className="container">
      <div className="edu-skills-grid">
        {/* Education Column */}
        <div className="edu-col">
          <h2 className="section-title">Education & Skills</h2>
          <div className="edu-list">
            <div className="edu-card">
              <span className="edu-year">2017-2021</span>
              <div className="edu-content">
                <h3>Diploma in Computer Engineering</h3>
                <p className="edu-inst">Thakurgaon Polytechnic Institute</p>
                <p className="edu-meta">CGPA: 3.81 (out of 4)</p>
              </div>
            </div>
            <div className="edu-card">
              <span className="edu-year">2015-2016</span>
              <div className="edu-content">
                <h3>Secondary School Certificate (SSC)</h3>
                <p className="edu-inst">
                  Technical Training Center, Thakurgaon
                </p>
                <p className="edu-meta">GPA: 5 (out of 5)</p>
              </div>
            </div>
            <div className="edu-card">
              <span className="edu-year">2012-2014</span>
              <div className="edu-content">
                <h3>Junior School Certificate (JSC)</h3>
                <p className="edu-inst">Dewly Araji Laskara High School</p>
                <p className="edu-meta">GPA: 4.06 (out of 5)</p>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Column */}
        <div className="skills-col">
          <h2 className="skills-title">My skills</h2>
          <p className="skills-desc">
            I'm a Freelancer Front-end Developer with over 3 years of
            experience. I code and create web elements for amazing people around
            the world. I like work with new people. New people new Experiences.
          </p>
          <div className="skills-list">
            <div className="skill-bar">
              <span>HTML5</span>
              <div className="bar-bg">
                <div className="bar-fill" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>WordPress</span>
              <div className="bar-bg">
                <div className="bar-fill" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>Magento</span>
              <div className="bar-bg">
                <div className="bar-fill" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>UI/UX</span>
              <div className="bar-bg">
                <div className="bar-fill" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
