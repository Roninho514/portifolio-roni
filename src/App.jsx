import './App.css';
import Menu from './components/Menu';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import TechList from './components/TechList';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { useRef } from 'react';

function App() {
  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const TechRef = useRef(null);
  const ExpeRef = useRef(null);
  const ContRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    /* console.log("Paasou"); */
  };

  return (
    <>
      <header className='cabecalho'>
        <Menu functionMy={scrollToSection} sections={{home: HomeRef, about:AboutRef, tech:TechRef, expe: ExpeRef, cont:ContRef}}/>
      </header>
      <main>
        <section ref={HomeRef}>
          <Banner />
        </section>

        <section ref={AboutRef}>
          <AboutMe />
        </section>

        <section ref={TechRef}>
          <TechList />
        </section>

        <section ref={ExpeRef}>
          <Experience />
        </section>

        <section ref={ContRef}>
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App
