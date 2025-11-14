import React, { useState } from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import portfolio_demo from '../../Data/Data';
import {
  fadeInDirection,
  hoverScale,
} from '../../utils/animations';


const Projects = () => {
  const [allProjects] = useState(portfolio_demo);
  const [projects, setProjects] = useState(portfolio_demo);
  const [showAll, setShowAll] = useState(6);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  const categories = ['All', 'Web', 'Web Design', 'Mobile App', 'Admin Dashboard'];
  const ITEMS_PER_LOAD = 3;


  // handle show more
  const handleLoadMore = () => {
    setLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setShowAll(prev => prev + ITEMS_PER_LOAD);
      setLoading(false);
    }, 800);
  }

  // handle filter
  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setProjects(allProjects);
      setShowAll(6);
    } else {
      const filtered = allProjects.filter(p => p.category === category);
      setProjects(filtered);
      setShowAll(6);
    }
  }
  return (
    <div className="projects" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          variants={fadeInDirection("up")}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">My Recent Works</h2>
          <p className="section-lead">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        </motion.div>
        <motion.div
          className="filter-bar text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInDirection("up", 0.2)}
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map(cat => (
            <button key={cat} onClick={() => handleFilter(cat)} className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}>
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="row">
          {
            projects?.map((portfolio, index) => {
              if (portfolio.id <= showAll) {
                return (
                  <motion.div
                    className="project"
                    key={portfolio.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: (index % 9) * 0.1 }}
                    whileHover={hoverScale}
                  >
                    <div className="project-thumb">
                      <img src={portfolio.img} alt={portfolio.title} />
                      <div className="live-demo">
                        <a href={portfolio.code_link} target="_blank" rel='noreferrer'>
                          <button>Code link <FontAwesomeIcon icon={faGithub} /></button>
                        </a>
                        <a href={portfolio.live_demo} target="_blank" rel='noreferrer'>
                          <button>Live demo <FontAwesomeIcon icon={faExternalLinkAlt} /></button>
                        </a>
                      </div>
                    </div>
                    <div className="project-body">
                      <h3 className="project-title">{portfolio.title}</h3>
                      <p className="project-desc">{portfolio.description}</p>
                    </div>
                  </motion.div>
                )
              }
              return null
            })
          }
        </div>

        {
          showAll < projects.length && (
            <div className="load-more-portfolio">
              <button
                onClick={handleLoadMore}
                className="show_more_btn comonBtn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin /> Loading...
                  </>
                ) : (
                  'Load more'
                )}
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Projects;