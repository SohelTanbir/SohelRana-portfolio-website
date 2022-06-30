import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import portfolio_demo from '../../Data/Data';


const Projects = () => {

// handle show more
const handleShowMore = ()=>{
  alert('show more');
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
                    portfolio_demo.map((portfolio, index)=>{
                      return(
                        <>
                        <div className="project" key={index}>
                      <img src={portfolio.img} alt="developer"/>
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
                    } )
                  }
                <div className="load-more-portfolio">
                <button onClick={handleShowMore} className="show_more_btn comonBtn">Show more</button>
                </div>
               </div>
           </div>
        </div>
    );
};

export default Projects;