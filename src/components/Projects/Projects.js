import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import developer from '../../images/portfolio/developer-cmmunity-samll.png';
import repair from '../../images/portfolio/mobileCare-small.png';
import appri from '../../images/portfolio/portfolio-1.png';
import  portfolio from '../../images/portfolio/portfolio-1.png';
import  travelAgency from '../../images/portfolio/travel-agency-small.png';
import  finix from '../../images/portfolio/portfolio-2.png';
import  winter from '../../images/portfolio/portfolio-3.png';
import  newbiz from '../../images/portfolio/portfolio-4.png';
import  noxia from '../../images/portfolio/portfolio-5.png';
import  teamviewer from '../../images/portfolio/team viewer.png';
import { faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <div className="projects">
           <div className="container">
               <div className="project-header comonStyle">
                   <h2>My Recent Works</h2>
                   <h4>What have I done ?</h4>
               </div>
               <div className="row">
                  <div className="project">
                      <img src={appri} alt="developer"/>
                      <div className="project-overlay">
                          <div className="project-info">
                            <h3>Appri App Landing page</h3>
                            <p>Appri is a app landing page.it's a full responsive website Templete.To make it I used only HTML and CSS</p>
                            <div className="live-demo">
                                <a href="https://github.com/SohelTanbir/Appri-App-landing-page" target="_blank">
                                <button>Code link <FontAwesomeIcon icon={faGithub}/></button>
                                </a>
                                <a href="https://soheltanbir.github.io/Appri-App-landing-page/" target="_blank">
                                <button>Live demo <FontAwesomeIcon icon={faExternalLinkAlt}/></button>
                                </a>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="project">
                      <img src={repair} alt="repairIT"/>  
                      <div className="project-overlay">
                          <div className="project-info">
                            <h3>Mobile Repire IT</h3>
                            <p>it's a Full stack single page web application with Dashboard.I used to make it React js, Node js, Express js, MongoDB and firebase.customer can repair their mobile phone by perches repair package from the application.</p>
                            <div className="live-demo">
                                <a href="https://github.com/SohelTanbir/mobileCare" target="_blank">
                                <button>Code link <FontAwesomeIcon icon={faGithub}/></button>
                                </a>
                                <a href="https://mobile-care-3d874.web.app/" target="_blank">
                                <button>Live demo <FontAwesomeIcon icon={faExternalLinkAlt}/></button>
                                </a>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="project">
                        <img src={developer} alt="developer"/>
                        <div className="project-overlay">
                          <div className="project-info">
                            <h3>Developer Community</h3>
                            <p>Developer Community is Blog Single page Applicaiton.it's maked by React js.Developer can write blog and published video Tutorial from the application.</p>
                            <div className="live-demo">
                                <a href="https://github.com/SohelTanbir/developers-community" target="_blank">
                                <button>Code link <FontAwesomeIcon icon={faGithub}/></button>
                                </a>
                                <a href="https://competent-mccarthy-3eb620.netlify.app/" target="_blank">
                                <button>Live demo <FontAwesomeIcon icon={faExternalLinkAlt}/></button>
                                </a>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="project">
                        <img src={travelAgency} alt="repairIT"/>
                        <div className="project-overlay">
                          <div className="project-info">
                            <h3>Travel Agency</h3>
                            <p>Travel agency is onlne Ticket Booking application.pasanger can buy ticket from the application and can see destination by google map.it's made by React js, firebase Authentication</p>
                            <div className="live-demo">
                                <a href="https://github.com/SohelTanbir/Travel-agency-with-authentication">
                                <button>Code link <FontAwesomeIcon icon={faGithub}/></button>
                                </a>
                                <a href="https://github.com/SohelTanbir/Travel-agency-with-authentication">
                                <button>Live demo <FontAwesomeIcon icon={faExternalLinkAlt}/></button>
                                </a>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="project">
                        <img src={winter} alt="repairIT"/>
                        <div className="project-overlay">
                          <div className="project-info">
                            <h3>E-Store </h3>
                            <p>E-Store is an E-commerce Website.customer can buy their cloth from the website.To make it I used Only HTML and CSS</p>
                            <div className="live-demo">
                                <a href="https://github.com/SohelTanbir/E-Store" target="_blank">
                                <button>Code link <FontAwesomeIcon icon={faGithub}/></button>
                                </a>
                                <a href="https://soheltanbir.github.io/E-Store/index.html" target="_blank">
                                <button>Live demo <FontAwesomeIcon icon={faExternalLinkAlt}/></button>
                                </a>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="project">
                        <img src={finix} alt="repairIT"/>
                        <div className="project-overlay">
                          <div className="project-info">
                            <h3>Finix Web Template</h3>
                            <p>Finix is beautiful get appoint web Template .To make it I used only HTML and CSS</p>
                            <div className="live-demo">
                                <a href="#">
                                <button>Code link <FontAwesomeIcon icon={faGithub}/></button>
                                </a>
                                <a href="#">
                                <button>Live demo <FontAwesomeIcon icon={faExternalLinkAlt}/></button>
                                </a>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="project">
                        <img src={newbiz} alt="repairIT"/>
                        <div className="project-overlay">
                          <div className="project-info">
                            <h3>Appri App Landing page</h3>
                            <p>Appri is a app landing page.it's a full responsive website Templete.To make it I used only HTML and CSS</p>
                            <div className="live-demo">
                                <a href="https://github.com/SohelTanbir/NewBiz-webiste" target="_blank">
                                <button>Code link <FontAwesomeIcon icon={faGithub}/></button>
                                </a>
                                <a href="https://soheltanbir.github.io/NewBiz-webiste/" target="_blank">
                                <button>Live demo <FontAwesomeIcon icon={faExternalLinkAlt}/></button>
                                </a>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="project">
                        <img src={noxia} alt="repairIT"/>
                        <div className="project-overlay">
                          <div className="project-info">
                            <h3>Noxia Web Template</h3>
                            <p>Noxia is Service provided website, .To make it I used only HTML and CSS</p>
                            <div className="live-demo">
                                <a href="https://github.com/SohelTanbir/Noxia-website" target="_blank">
                                <button>Code link <FontAwesomeIcon icon={faGithub}/></button>
                                </a>
                                <a href="https://soheltanbir.github.io/Noxia-website/" target="_blank">
                                <button>Live demo <FontAwesomeIcon icon={faExternalLinkAlt}/></button>
                                </a>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="project">
                        <img src={teamviewer} alt="repairIT"/>
                        <div className="project-overlay">
                          <div className="project-info">
                            <h3>Team Viewer Application</h3>
                            <p>eam Viewer single page Application.user can view all information of player Team.To make it I used React js</p>
                            <div className="live-demo">
                                <a href="" target="_blank">
                                <button>Code link <FontAwesomeIcon icon={faGithub}/></button>
                                </a>
                                <a href="https://amazing-bassi-bd1eff.netlify.app/" target="_blank">
                                <button>Live demo <FontAwesomeIcon icon={faExternalLinkAlt}/></button>
                                </a>
                            </div>
                          </div>
                      </div>
                  </div>
               </div>
           </div>
        </div>
    );
};

export default Projects;