import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBirthdayCake,
    faEnvelope,
    faMapMarkerAlt,
    faPhone,
    faGraduationCap,
    faCalendarAlt,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

// Brand/dev icons
import {
    FaReact,
    FaNodeJs,
    FaBootstrap,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiShopify,
    SiMongodb,
    SiExpress,
    SiRedux,
    SiSocketdotio,
    SiJquery,
    SiCss3,
} from "react-icons/si";
import { education, experience } from "../../Data/Data";

const About = () => {
    const tools = [
        { name: "React", icon: <FaReact size={30} color="#61DAFB" />, gradient: "linear-gradient(135deg, #f0fbff 0%, #e3f5fc 100%)" },
        { name: "Next.js", icon: <SiNextdotjs size={30} color="#000000" />, gradient: "linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)" },
        { name: "Redux Toolkit", icon: <SiRedux size={30} color="#764ABC" />, gradient: "linear-gradient(135deg, #f8f5fc 0%, #ede7f6 100%)" },
        { name: "Tailwind", icon: <SiTailwindcss size={30} color="#38BDF8" />, gradient: "linear-gradient(135deg, #f0fbff 0%, #e1f5fe 100%)" },
        { name: "Bootstrap", icon: <FaBootstrap size={30} color="#7952B3" />, gradient: "linear-gradient(135deg, #f5f3f9 0%, #e8e4f3 100%)" },
        { name: "CSS3", icon: <SiCss3 size={30} color="#1572B6" />, gradient: "linear-gradient(135deg, #f0f8fc 0%, #e1f5fe 100%)" },
        { name: "jQuery", icon: <SiJquery size={30} color="#0769AD" />, gradient: "linear-gradient(135deg, #f0f7fb 0%, #e3f2fd 100%)" },
        { name: "Node.js", icon: <FaNodeJs size={30} color="#68A063" />, gradient: "linear-gradient(135deg, #f3faf4 0%, #e8f5e9 100%)" },
        { name: "Express", icon: <SiExpress size={30} color="#000000" />, gradient: "linear-gradient(135deg, #fafbfc 0%, #f3f4f6 100%)" },
        { name: "MongoDB", icon: <SiMongodb size={30} color="#00A940" />, gradient: "linear-gradient(135deg, #f0faf5 0%, #e0f2e9 100%)" },
        { name: "Socket.io", icon: <SiSocketdotio size={30} color="#010101" />, gradient: "linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)" },
        { name: "Shopify", icon: <SiShopify size={30} color="#7ab55c" />, gradient: "linear-gradient(135deg, #f9fdf7 0%, #f1f8e9 100%)" },
    ];



    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="about" id="about" aria-label="About">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-lead">
                        I craft fast, accessible, and maintainable products with React, Next.js, Tailwind, and Shopify Polaris —
                        turning complex ideas into elegant, scalable interfaces.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="about-content">
                    {/* LEFT: Education & Experience */}
                    <div className="about-left">
                        <h3 className="subsection-title">Experience & Education</h3>
                        <div className="education-list">
                            {experience.map((exp, i) => (
                                <div key={i} className="education-card experience-card">
                                    <div className="education-icon experience-icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </div>
                                    <div className="education-content">
                                        <h4 className="education-degree">{exp.position}</h4>
                                        <p className="education-institution">{exp.company}</p>
                                        <div className="education-year">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                            <span>{exp.year}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {education.map((edu, i) => (
                                <div key={i} className="education-card">
                                    <div className="education-icon">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </div>
                                    <div className="education-content">
                                        <h4 className="education-degree">{edu.degree}</h4>
                                        <p className="education-institution">{edu.institution}</p>
                                        <div className="education-year">
                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                            <span>{edu.year}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Technologies */}
                    <div className="about-right">
                        <h3 className="subsection-title">Core Technologies</h3>
                        <div className="tools-grid">
                            {tools.map((tool, i) => (
                                <div
                                    key={i}
                                    className="tool-card"
                                    title={tool.name}
                                    style={{ background: tool.gradient }}
                                >
                                    <div className="tool-icon">{tool.icon}</div>
                                    <span className="tool-name">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Me Button - Centered */}
                <div className="about-cta">
                    <button className="contact-me-btn" onClick={scrollToContact}>

                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
