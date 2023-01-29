import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Router>
        <header><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"></link>
        <NavBar/>
        </header>
          <AboutMe/>
          <Skills/>
          <Projects/>
        <footer>
          <Contact/>
        </footer>
      </Router>
    </div>
  );
}

export default App;
