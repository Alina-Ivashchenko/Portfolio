import './App.css';
import NavBar from './components/NavBar/navbar';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
