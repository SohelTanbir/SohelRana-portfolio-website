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
} from "@fortawesome/free-solid-svg-icons";

// Brand/dev icons
import {
    FaReact,
    FaNodeJs,
    FaAws,
    FaDocker,
    FaFigma,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiShopify,
    SiMongodb,
    SiExpress,
} from "react-icons/si";

const About = () => {
    const tools = [
        { name: "React", icon: <FaReact size={28} color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs size={24} color="#ffffff" /> },
        { name: "Node.js", icon: <FaNodeJs size={28} color="#7cc327" /> },
        { name: "Express", icon: <SiExpress size={24} color="#ffffff" /> },
        { name: "MongoDB", icon: <SiMongodb size={24} color="#00ED64" /> },
        { name: "Tailwind", icon: <SiTailwindcss size={26} color="#38BDF8" /> },
        { name: "Shopify", icon: <SiShopify size={24} color="#95BF47" /> },
        { name: "AWS", icon: <FaAws size={26} color="#FF9900" /> },
        { name: "Docker", icon: <FaDocker size={26} color="#2496ED" /> },
        { name: "Figma", icon: <FaFigma size={26} color="#F24E1E" /> },
    ];

    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Technology",
            year: "2018 - 2022"
        },
        {
            degree: "Full Stack Web Development Certification",
            institution: "Online Learning Platform",
            year: "2022"
        }
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
                    {/* LEFT: Education */}
                    <div className="about-left">
                        <h3 className="subsection-title">Education</h3>
                        <div className="education-list">
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
                                <div key={i} className="tool-card" title={tool.name}>
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
                        <FontAwesomeIcon icon={faEnvelope} />
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
