import React from 'react';
import './Home.css';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'

const Home = () => {
    return (
        <div className="home">
          <Banner/>
          <About/>
          <Skills/>
          <Projects/>
        </div>
    );
};

export default Home;