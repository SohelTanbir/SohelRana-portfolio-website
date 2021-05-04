import React from 'react';
import './Home.css';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills'


const Home = () => {
    return (
        <div className="home">
          <Banner/>
          <About/>
          <Skills/>
        </div>
    );
};

export default Home;