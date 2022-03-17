import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />  
      </header>
      <main>      
      <p>
          Welcome to 8th Markham Scouts Group of Scouts Canada!
        </p>
      <a
          className="App-link"
          href="https://scoutstracker.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Scouts Tracker
        </a>
        <a
          className="App-link"
          href="https://www.myscouts.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thank a Scouter
        </a>
        <a
          className="App-link"
          href="https://www.facebook.com/groups/2044651302322203/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook group
        </a>
      <a
          className="App-link"
          href="https://www.scouts.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Scouts Canada
        </a>
      </main>
    </div>
  );
}

export default App;
