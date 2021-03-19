import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage'
import Projects from './Components/Projects'

function App() {
  return (<div>
    <div className="App">
      <HomePage/>
    </div>
    <div>
      <Projects />
    </div>
    </div>
  );
}

export default App;
