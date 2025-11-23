import React from 'react';
import './Skills.css'
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaFigma } from 'react-icons/fa';

const Skills = () => {
    const technicalSkills = [
        { name: 'React / Next.js', percentage: 95 },
        { name: 'Node.js / Express', percentage: 90 },
        { name: 'UI/UX Design', percentage: 85 },
        { name: 'Mobile Development', percentage: 80 }
    ];

    const tools = [
        { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
        { name: 'Node.js', icon: <FaNodeJs size={40} color="#68A063" /> },
        { name: 'Python', icon: <FaPython size={40} color="#FFD43B" /> },
        { name: 'AWS', icon: <FaAws size={40} color="#FF9900" /> },
        { name: 'Docker', icon: <FaDocker size={40} color="#2496ED" /> },
        { name: 'Figma', icon: <FaFigma size={40} color="#F24E1E" /> }
    ];

    return (
        <div className="skills-expertise-section" id="skills">
            <div className="skills-expertise-container">
                <div className="section-header">
                    <h2 className="section-title">Technologies I Work With</h2>
                    <p className="section-lead">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                </div>

                <div className="skills-expertise-content">
                    {/* Technical Skills Column */}
                    <div className="technical-skills-column">
                        <h3>Technical Skills</h3>
                        <div className="skills-list">
                            {technicalSkills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percentage">{skill.percentage}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{ width: `${skill.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Technologies Column */}
                    <div className="tools-technologies-column">
                        <h3>Tools & Technologies</h3>
                        <div className="skills-tools-grid">
                            {tools.map((tool, index) => (
                                <div key={index} className="skills-tool-card">
                                    <div className="skills-tool-icon">{tool.icon}</div>
                                    <span className="skills-tool-name">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;