import React from 'react'
import { Element } from 'react-scroll'
import {IconButton} from '@mui/material'
import { LinkedIn,GitHub, Twitter, Instagram, Telegram } from '@mui/icons-material'
import './Contact.css'

const  Contact=()=> {
  return (
    <Element id="contact" className='contact_container'>
        <h1>Contact ME</h1>
        <div className='contactContainer'>
            <h2>Yugandhar Naik Sabhavath</h2>
            <p>
                Email :<span>syugandharnayak8888@gmail.com</span>
            </p>
            
            <p1>
               <span>9494452610</span>
            </p1>

            <div className='contactIcons'>
                <a href="https://www.linkedin.com/in/yugandhar-naik-sabhavath">
                    <IconButton>
                        <LinkedIn className='iconSize' />                        
                    </IconButton>
                </a>
            
                <a href="https://github.com/YugandharNaik22">
                    <IconButton>
                        <GitHub className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="https://twitter.com/Balu42284020">
                   <IconButton>
                    <Twitter className='iconSize' />
                   </IconButton>
                </a>
                <a href="https://www.instagram.com/it_call_me_lucky/">
                    <IconButton>
                        <Instagram className='iconSize' />                        
                    </IconButton>
                </a>
                <a href="https://web.telegram.org/a/#-1242584289">
                    <IconButton>
                        <Telegram className='iconSize' />                        
                    </IconButton>
                </a>
            </div>
        </div>
        
        <div>
      <a href="https://myquotes00.ccbp.tech/"  rel="noopener noreferrer" className="me" >
        <h1 class="lift-animation">
          <p className="para">"Self-belief and hard work will always earn you success...😎"</p>
          <cite>~Yugandhar Naik Sabhavath💚</cite>
        </h1>
      </a> 
      

      </div>
      

    </Element>
  )
}

export default Contact
