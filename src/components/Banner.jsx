import React from 'react';
import "./banner.css";
import perfilPicture from '../assets/images/roni-perfil.jpg';
import {useEffect, useState} from "react"


const Banner = () => {

  const [title, setTitle] = useState("");
  const [cursor, setCursor] = useState(true);
  const write = (title, i = 0) => {
    if(title.length > i) {
      setTitle(title.slice(0 , i + 1));
      setTimeout(() => write(title, i +1), 100);
    } else{
      setCursor(false);
    }
  }

  useEffect(() => {
    setTimeout(() => write("Bem vindo, eu sou Roni dos Santos"));
  }, []);

  return (
    <div className='banner-container'>
      <div className='text-banner'>
        <h1 className='main-title'>{title} { cursor && <span className="blinking-cursor"></span>}</h1>
        <h1 className='second-title'>Desenvolvedor Front End</h1>
        <span className='last-title'>Conheça um pouco de mim e do meu trabalho</span>
      </div>

      <div className='image-perfil-banner'>
        <img src={perfilPicture}  alt="Imagem do perfil do Roni" />
      </div>
    </div>
  )
}

export default Banner