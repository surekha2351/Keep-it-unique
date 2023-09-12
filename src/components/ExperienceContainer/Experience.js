import React from 'react'
import { Element } from 'react-scroll'
import ExperienceBox from '../ExperienceBox/ExperienceBox'
import './Experience.css'

const  Experience=()=> {
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experience</h1>
      <div className="experienceContainer__info">
        <ExperienceBox number="+50" title="Websites Build"
        style={{backgroundColor:"#3399D1",color:"black"}}
         />
        <ExperienceBox
          number="+10" 
          title="Projects"
          style={{ backgroundColor: "#AAB7E1" ,color:"black"}}


        />
        <ExperienceBox
        
          number="+5"
          title="Internships"
          style={{ backgroundColor: "#DDAFDE",color:"black" }}
        />
        <ExperienceBox number="+400" title="Programs"
        style={{backgroundColor:"#F6CCE2",color:"black"}}

        />
      </div>
    </Element>
  )
}

export default Experience
