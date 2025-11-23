import React from 'react';
import './Home.css';
import About from '../About/About';
import Banner from '../Banner/Banner';
import GitHubStats from '../GitHubStats/GitHubStats';
import Projects from '../Projects/Projects'
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
// Education section removed as requested
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <About />
      <GitHubStats />
      <Projects />
      <Blog />
      <Contact />
      {/* <Education /> */}
      <Footer />
    </div>
  );
};

export default Home;