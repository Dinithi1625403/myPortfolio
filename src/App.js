import Nav from './components/nav';
import './App.css';
import Background from './components/background';
import Intro from './components/intro';
import About from './components/about';
import SkillsP from './components/skillP';
import Projects from './components/projects';
import Contact from './components/contact';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      <Intro/>
      <About />
      <SkillsP />
      <Projects />
      <Contact />
      </header>
    </div>
  );
}

export default App;
