import React from 'react'
import {Link} from 'react-scroll'
import './TopContent.css'

function TopContent() {
  return (
    <div className='topContent' id="about">
        
        <div className="topContent_container">
            <h1>YUGANDHAR NAIK SABHAVATH</h1>
            <p>A Passionate Web and Front-end Developer💚</p>
            <a href="https://drive.google.com/file/d/1BTp1jNlw_4oyYZK1yvFadVc2Jbv5yXYV/view?usp=drive_link ">
                <button className='downloadButton'>Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className="workButton">My Work</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent
