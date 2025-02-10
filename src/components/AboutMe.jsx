import React from "react";
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
        <h1 className="Title">Sobre mim</h1>
        <div className="aboutMeBox">
            <div className="profissionalResumeBox">
                <h2>Resumo Profissional</h2>
                <p>
                    Sou um desenvolvedor front-end com 3 anos de experiência, 
                    mas estudo programação dês dos meus 16 anos, sou  apaixonado
                    por criar interfaces web de alta qualidade. Durante minha
                    trajetória, tenho trabalhado com Angular e TypeScript para
                    desenvolver soluções eficientes e escaláveis, sempre aplicando as
                    melhores práticas de desenvolvimento. Minha expertise também inclui
                    o uso de SCSS para estilizar interfaces de forma eficiente,
                    garantindo não só a funcionalidade, mas também um design moderno e
                    responsivo.
                </p>
            </div>
            <div className="personalInformationBox">
                <ul>
                    <li><span>Nome:</span> Roni dos Santos</li>
                    <li><span>Idade:</span> 23 Anos</li>
                    <li><span>Email:</span> roni.silvasantos514@gmail.com</li>
                    <li><span>Local:</span> Mauá, São Paulo</li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default AboutMe;
