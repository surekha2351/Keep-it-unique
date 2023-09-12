import React from 'react'
import { Link } from 'react-scroll'
import './Header.css'

function Header() {

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        scrollToSection(selectedValue);
      };
    
      const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
      <div className="header">
          <div className="header_left">
              <img src="https://res.cloudinary.com/drdjty87p/image/upload/v1694545443/WhatsApp_Image_2023-09-13_at_00.27.52_jvrpgn.jpg" alt=""/>
              <h1>Develop<span>ER</span></h1>
          </div>
  
          <div className='header_right'>
              <Link to="about" smooth={true} duration={500}>
                  <h4>About Me</h4>
              </Link>
              <Link to="skills" smooth={true} duration={500}>
                  <h4>Skills</h4>
              </Link>
              <Link to="projects" smooth={true} duration={500}>
                  <h4>Projects</h4>
              </Link>
              <Link to="exp" smooth={true} duration={500}>
                  <h4>Experience</h4>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                  <h4 ><button className="header2">Join With Me</button></h4>
              </Link>
            
              
          </div>
         
          <select className='header-right-select' onChange={handleSelectChange}>
            <option value="about">About Me</option>
            <option value="skills">Skills</option>
            <option value="projects">Projects</option>
            <option value="expe">Experience</option>
            <option value="contact">Join With Me</option>
         </select>

      
        
      </div>
    )
  }
  
  export default Header