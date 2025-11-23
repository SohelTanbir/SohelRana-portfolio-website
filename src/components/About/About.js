import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faCalendarAlt,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
    fadeInDirection,
    staggerContainer,
    staggerItem,
    scrollReveal,
    hoverScale,
} from "../../utils/animations";

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
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInDirection("up")}
                    {...scrollReveal}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-lead">
                        I'm Sohel Rana, a MERN Stack Developer specializing in scalable, high-performance web applications using React, Next.js, Node.js, and MongoDB.
                        With strong skills in Redux Toolkit and  RTK Query. I build clean, responsive, and reusable interfaces that deliver seamless user experiences.
                    </p>
                </motion.div>

                {/* Two Column Layout */}
                <div className="about-content">
                    {/* LEFT: Education & Experience */}
                    <motion.div
                        className="about-left"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInDirection("left", 0.2)}
                        {...scrollReveal}
                    >
                        <h3 className="subsection-title">Experience & Education</h3>
                        <motion.div
                            className="education-list"
                            variants={staggerContainer(0.15)}
                            initial="hidden"
                            whileInView="visible"
                            {...scrollReveal}
                        >
                            {experience.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    className="education-card experience-card"
                                    variants={staggerItem}
                                    whileHover={hoverScale}
                                >
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
                                </motion.div>
                            ))}
                            {education.map((edu, i) => (
                                <motion.div
                                    key={i}
                                    className="education-card"
                                    variants={staggerItem}
                                    whileHover={hoverScale}
                                >
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
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT: Technologies */}
                    <motion.div
                        className="about-right"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInDirection("right", 0.2)}
                        {...scrollReveal}
                    >
                        <h3 className="subsection-title">Core Skills</h3>
                        <motion.div
                            className="tools-grid"
                            variants={staggerContainer(0.08)}
                            initial="hidden"
                            whileInView="visible"
                            {...scrollReveal}
                        >
                            {tools.map((tool, i) => (
                                <motion.div
                                    key={i}
                                    className="tool-card"
                                    title={tool.name}
                                    style={{ background: tool.gradient }}
                                    variants={staggerItem}
                                    whileHover={hoverScale}
                                >
                                    <div className="tool-icon">{tool.icon}</div>
                                    <span className="tool-name">{tool.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Contact Me Button - Centered */}
                <motion.div
                    className="about-cta"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInDirection("up", 0.4)}
                    {...scrollReveal}
                >
                    <button className="contact-me-btn" onClick={scrollToContact}>

                        Contact Me
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
