import React from 'react';
import './Experience.css';
import examRoomLogo from '../assets/Jobs/examroom.jpg';
import be3Logo from '../assets/Jobs/be3.jpg';
import a4fLogo from '../assets/Jobs/a4f.jpg';
import intelligentiLogo from '../assets/Jobs/intelligenti.jpg';

const Experience = () => {
  return (
    <div className='ExperienceContainer'>
      <h2>Experiência</h2>
      <div className='ListExperienceBox'>
        <div className='BoxItemExperience'>
          <div className='BoxItemHeader'>
            <div className='ImgJob'>
              <img src={examRoomLogo} alt="ExamRoom Logo" />
            </div>
            <div className='TextJob'>
                <h3>Desenvolvedor Fron-End - Ago 2023 a Out 2024</h3>
                <span className='NameJob'>ExamRoom.Ai</span>
            </div>
          </div>
          <div className='BoxItemBody'>
            <p>
              Desenvolvimento frontend utilizando Angular 
              Tecnologias utilizadas: Angular,NGRX, Microfrontend 
            </p>
          </div>
        </div>

        <div className='BoxItemExperience'>
          <div className='BoxItemHeader'>
            <div className='ImgJob'>
              <img src={be3Logo} alt="Be3 Tech Logo" />
            </div>
            <div className='TextJob'>
                <h3>Desenvolvedor Fron-End - Nov 2022 a Ago 2023</h3>
                <span className='NameJob'>Be3 Health Tech</span>
            </div>
          </div>
          <div className='BoxItemBody'>
            <p>
              Desenvolvimento backend utilizando .NET e criação de interfaces de usuário frontend com Angular 
              Tecnologias utilizadas: .Net Framework 4.5, dotnet 6.0, SQL Server, ADO, Entity Framework, 
              Dapper,WebApi, AzureDevops, IIS, Angular 8
            </p>
          </div>
        </div>

        <div className='BoxItemExperience'>
          <div className='BoxItemHeader'>
            <div className='ImgJob'>
              <img src={a4fLogo} alt="A4F Consultoria Logo" />
            </div>
            <div className='TextJob'>
                <h3>Desenvolvedor Fron-End - Nov 2022 a Ago 2023 (frelancer)</h3>
                <span className='NameJob'>A4F Consultoria</span>
            </div>
          </div>
          <div className='BoxItemBody'>
            <p>
              Desenvolvimento de landing page utilizando a tecnologias como HTML, CSS, Javascript e biblioteca 
              Bootstrap . 
            </p>
          </div>
        </div>

        <div className='BoxItemExperience'>
          <div className='BoxItemHeader'>
            <div className='ImgJob'>
              <img src={intelligentiLogo} alt="Intelligenti Logo" />
            </div>
            <div className='TextJob'>
                <h3>Analista de sistemas  Mai 2021 a Nov 2022 </h3>
                <span className='NameJob'>Intelligenti</span>
            </div>
          </div>
          <div className='BoxItemBody'>
            <p>
              Analista de máquinas que executavam programas em python selenium.
              Tecnologias Utilizadas: Python, selenium.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience