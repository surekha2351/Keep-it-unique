import React from 'react'
import { Element } from 'react-scroll'
import LinearProgress from "@mui/material/LinearProgress";
import './Skills.css'


function Skills() {
  return (
    <Element className='skillContainer' id="skills">
        <h2>Skill Set</h2>
        <div className='skillsBgContainer'>
           

            <div className="skills_text">
            
                <div className='skillSet'>
                    <h5>HTML</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={90} className='progress1' />
                    </div>
                </div>
                <div className='skillSet'>
                    <h5>CSS</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={90} className='progress2'/>
                    </div>
                </div>
                <div className='skillSet'>
                    <h5>Javascript</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={85} className='progress5'/>
                    </div>
                </div>
                <div className='skillSet'>
                    <h5>React JS</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={87} className='progress7'/>
                    </div>
                </div>
                <div className='skillSet'>
                    <h5>Python</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={85} className='progress3'/>
                    </div>
                </div>
                <div className='skillSet'>
                    <h5>SQL</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={85} className='progress4'/>
                    </div>
                </div>
                
                <div className='skillSet'>
                    <h5>Node JS</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={75} className='progress6'/>
                    </div>
                </div>
                <div className='skillSet'>
                    <h5>Linux</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={85} className='progress7'/>
                    </div>
                </div>
                <div className='skillSet'>
                    <h5>Manual Testing</h5>
                    <div className='slider_skillContainer '>
                        <LinearProgress variant="determinate" value={95} className='progress7'/>
                    </div>
                </div>
               

            </div>
       
        <div className="skillContainer__image">
          <img
            src="https://t4.ftcdn.net/jpg/01/31/96/99/360_F_131969925_4npM7jqii8Dlo76mRROdD0r285Oojc8d.jpg"
            alt=""
          />
        </div>
        </div>
    </Element>
  )
}

export default Skills
