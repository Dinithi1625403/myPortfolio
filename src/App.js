import Nav from './components/nav';
import './App.css';
import Background from './components/background';
import Intro from './components/intro';
import About from './components/about';
import SkillsP from './components/skillP';
import Projects from './components/projects';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      <Intro/>
      <About />
      <SkillsP />
      <Projects />
      </header>
    </div>
  );
}

export default App;
