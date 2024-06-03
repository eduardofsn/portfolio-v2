import './App.css'
import Footer from './sections/Footer/Footer'
import Hero from './sections/Hero/Hero'
import Hobbies from './sections/Hobbies/Hobbies'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import { Link } from 'react-scroll'

function App() {
  return (
    <>
    <nav className='nav'>
      <ul>
        <Link activeClass='active' smooth spy to ="hero"><li><a href="#hero">Sobre mim</a></li></Link>
        <Link activateClass='active' smooth spy to = "projects"><li><a href="#projects">Projetos</a></li></Link>
        <Link activateClass='active' smooth spy to = "hobbies"><li><a href="#hobbies">Hobbies</a></li></Link>
        <Link activeClass='active' smooth spy to = "skills"><li><a href="#skills">Habilidades</a></li></Link>

      </ul>
    </nav>
      <Hero/>
      <Projects/>
      <Skills/>
      <Hobbies/>
      <Footer/>
    </>
  )
}

export default App
