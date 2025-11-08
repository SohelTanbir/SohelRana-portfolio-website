import React from 'react';
import './Home.css';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className="home">
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Education/>
          <Footer/>
        </div>
    );
};

export default Home;