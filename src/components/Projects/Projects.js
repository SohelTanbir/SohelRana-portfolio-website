import React, { useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import portfolio_demo from '../../Data/Data';


const Projects = () => {
  const [projects, setProjects ] = useState(portfolio_demo);
  const [showAll, setShowAll] = useState(9);

 

// handle show more
const handleLoadMore = ()=>{
  setShowAll(portfolio_demo.length);
}
    return (
        <div className="projects">
           <div className="container">
               <div className="project-header comonStyle">
                   <h2>My Recent Works</h2>
                   <h4>What have I done ?</h4>
               </div>
               <div className="row">
                  {
                    projects?.map( portfolio=>{
                      if(portfolio.id <= showAll){
                        return(
                          <>
                          <div className="project" key={portfolio.id}>
                        <img src={portfolio.img} alt="no images"/>
                        <div className="project-overlay">
                            <div className="project-info">
                              <h3>{portfolio.title}</h3>
                              <p>{portfolio.description}</p>
                              <div className="live-demo">
                                  <a href={portfolio.code_link} target="_blank" rel='noreferrer'>
                                  <button>Code link <FontAwesomeIcon icon={faGithub}/></button>
                                  </a>
                                  <a href={portfolio.live_demo} target="_blank" rel='noreferrer'>
                                  <button>Live demo <FontAwesomeIcon icon={faExternalLinkAlt}/></button>
                                  </a>
                              </div>
                            </div>
                        </div>
                    </div>
                          </>
                        ) 
                      }
                      return null
                    } )
                  }
                {
                  showAll<=9&& <div className="load-more-portfolio">
                  <button onClick={handleLoadMore} className="show_more_btn comonBtn">Load more</button>
                  </div>
                }
               </div>
           </div>
        </div>
    );
};

export default Projects;