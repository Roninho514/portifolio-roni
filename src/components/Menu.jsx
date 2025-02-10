import React from 'react';
import './Menu.css'

const Menu = ({functionMy, sections}) => {
  return (
    <nav className='menu'>
        <ul>
            <li onClick={ () => functionMy(sections.home)}>Home</li>
            <li onClick={ () => functionMy(sections.about)}>Sobre Mim</li>
            <li onClick={ () => functionMy(sections.tech)}>Tecnologias</li>
            <li onClick={ () => functionMy(sections.expe)}>Experiências</li>
            <li onClick={ () => functionMy(sections.cont)}>Contato</li>
        </ul>
    </nav>
  )
}

export default Menu