import logo from './logo.svg';
import './App.css';
import Header from './containers/UI/organisms/Header/Header';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './redux/index';

function check() {
  console.log('hey')
}

function App() {
  const rotate = useSelector(state => state.rotate);
  const dispatch = useDispatch();
  // const actions = bindActionCreators(actionCreators, dispatch); or destructure like below line
  const { startRotation, stopRotation } = bindActionCreators(actionCreators, dispatch);

  // if we dont use bindActionCreator. then we have to dispatch actions like that, dispatch(actionCreators.startRotation())

  return (
    <div className="App">
      <Header />
      <img src={logo} className={"App-logo" + (rotate ? "" : " App-logo-paused")} alt="logo"/>
      <p onClick={rotate ? stopRotation : startRotation}>
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
