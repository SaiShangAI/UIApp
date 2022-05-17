import logo from './RA.png';
import './App.css';
import fetchAPI from './APICall';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi！Welcome to RA world :)
        </p>
        <button onClick={() => { fetchAPI('CurrentHumidity') }}
        >
          Get VM temperature
        </button>
      </header>
    </div>
  );
}

export default App;
