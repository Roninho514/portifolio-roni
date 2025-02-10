import React from 'react'
import "./TechList.css"
import iconHtml from '../assets/technologias/icon-html.png';
import iconcss from '../assets/technologias/icon-css.png';
import iconJavascript from '../assets/technologias/icon-javascript.png';
import iconAngular from '../assets/technologias/icon-angular.png';
import iconReact from '../assets/technologias/icon-react.png';
import iconSass from '../assets/technologias/icon-sass.png';
import iconCsharp from '../assets/technologias/icon-csharp.png';
import iconGit from '../assets/technologias/icon-git.png';
import iconGitHub from '../assets/technologias/icon-github.png';
import iconPython from '../assets/technologias/icon-python.png';
import iconSelenium from '../assets/technologias/icon-selenium.png';
import iconType from '../assets/technologias/icon-typescript.png';

const icons = [
  {path: iconHtml, alt:"icone Html"},
  {path: iconcss, alt:"icone Css"},
  {path: iconJavascript, alt:"icone Javascript"},
  {path: iconAngular, alt:"icone Angular"},
  {path: iconReact, alt:"icone React"},
  {path: iconType, alt:"icone typescript"},
  {path: iconSass, alt:"icone Sass"},
  {path: iconCsharp, alt:"icone Csharp"},
  {path: iconGit, alt:"icone Git"},
  {path: iconGitHub, alt:"icone GitHub"},
  {path: iconPython, alt:"icone Python"},
  {path: iconSelenium, alt:"icone Selenium"},
  ]

const TechList = () => {
  return (
    <div className='techListContainer'>
        <h2 className='title'>Tecnologias</h2>
        <div className="techListBox">
          <div className='list'>
            {icons.map((item, i) => (
              <div  className='item-box' key={i}>
                <img src={item.path} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default TechList