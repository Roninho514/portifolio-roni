import React from 'react';
import './Contact.css';
import { SlPhone } from "react-icons/sl";
import { SlEnvolope } from "react-icons/sl";
import { SlMap } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";

const Contact = () => {
  return (
    <div className='ContactContainer'>
        <div className='ContactBox'>
          <ul className='IconContact'>
            <li>
              <SlPhone className='Icon'/>
              (11) 943465718
            </li>
            <li>
              <SlEnvolope className='Icon'/>
              <span>roni.silvasantos514@gmail.com</span>
            </li>
            <li>
              <SlMap className='Icon'/>
              <span>Mauá - São Paulo</span>
            </li>
          </ul>

          <ul className='IconSocial'>
            <li>
              <a href="https://www.linkedin.com/in/roni-dos-santos/" target='_blank'><SlSocialLinkedin/></a>
            </li>
            <li>
              <a href="https://github.com/Roninho514" target='_blank'><SlSocialGithub/></a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Contact