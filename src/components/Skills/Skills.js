import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div className="skill">
            <div className="skill-heading comonStyle">
                <h2>My Skills</h2>
                <h4>What am I Know ?</h4>
            </div>
           <div className="container">
            <div className="row">
               <div className="technical-skills">
                    <span>HTML5</span>
                   <div className="html-skill comonSkill"></div>

                    <span>CSS3</span>
                   <div className="css3 comonSkill"></div>

                    <span>Javascript</span>
                   <div className="javascript comonSkill"></div>

                    <span>React js</span>
                   <div className="reactjs comonSkill"></div>

                    <span>Bootstrap</span>
                   <div className="bootstrap comonSkill"></div>
                   
               </div>
               <div className="technical-skills">
                    <span>jQuery</span>
                   <div className="jquery comonSkill"></div>
                    <span>SASS</span>
                   <div className="sass comonSkill"></div>
                    <span>Node js</span>
                   <div className="nodejs comonSkill"></div>
                    <span>Express js</span>
                   <div className="Expressjs comonSkill"></div>
                    <span>mongoDB</span>
                   <div className="mongodb comonSkill"></div>
               </div>
            </div>
           </div>
          
        </div>
    );
};

export default Skills;