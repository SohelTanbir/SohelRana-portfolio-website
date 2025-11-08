import React, { useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import portfolio_demo from '../../Data/Data';


const Projects = () => {
  const [allProjects] = useState(portfolio_demo);
  const [projects, setProjects] = useState(portfolio_demo);
  const [showAll, setShowAll] = useState(9);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web', 'Web Design', 'App', 'Design', 'Graphic'];



  // handle show more
  const handleLoadMore = () => {
    setShowAll(portfolio_demo.length);
  }

  // handle filter
  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setProjects(allProjects);
      setShowAll(9);
    } else {
      const filtered = allProjects.filter(p => p.category === category);
      setProjects(filtered);
      setShowAll(filtered.length);
    }
  }
  return (
    <div className="projects">
      <div className="container">
        <div className="project-header comonStyle">
          <h2>My Recent Works</h2>
          <h4>What have I done ?</h4>
        </div>
        <div className="filter-bar text-center">
          {categories.map(cat => (
            <button key={cat} onClick={() => handleFilter(cat)} className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="row">
          {
            projects?.map(portfolio => {
              if (portfolio.id <= showAll) {
                return (
                  <div className="project" key={portfolio.id}>
                    <div className="project-thumb">
                      <img src={portfolio.img} alt={portfolio.title} />
                    </div>
                    <div className="project-body">
                      <h3 className="project-title">{portfolio.title}</h3>
                      <p className="project-desc">{portfolio.description}</p>
                      <div className="live-demo">
                        <a href={portfolio.code_link} target="_blank" rel='noreferrer'>
                          <button>Code link <FontAwesomeIcon icon={faGithub} /></button>
                        </a>
                        <a href={portfolio.live_demo} target="_blank" rel='noreferrer'>
                          <button>Live demo <FontAwesomeIcon icon={faExternalLinkAlt} /></button>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            })
          }

          {
            showAll <= 9 && projects.length > showAll && (
              <div className="load-more-portfolio">
                <button onClick={handleLoadMore} className="show_more_btn comonBtn">Load more</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;