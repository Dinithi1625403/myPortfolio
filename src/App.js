import Nav from './components/nav';
import './App.css';
import Background from './components/background';
import Intro from './components/intro';
import About from './components/about';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      <Intro/>
       
        <About />
        
      </header>
    </div>
  );
}

export default App;
