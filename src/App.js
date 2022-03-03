import logo from './logo.svg';
import './App.css';
import Header from './containers/UI/organisms/Header/Header'

function App() {
  return (
    <div className="App">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sudofy's Frontend Boilerplate (React)
        </p>
        <a
          className="App-link"
          href="https://sudofy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          About SUDOFY
        </a>
    </div>
  );
}

export default App;
