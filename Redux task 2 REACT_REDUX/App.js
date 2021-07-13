import logo from './logo.svg';
import './App.css';
import ReactReduxCounter from './React-redux/ReactReduxCounter';
import ReactReduxthunk from './Redux-thunk/ReactReduxthunk';

function App() {
  return (
    <div className="App">
      <ReactReduxCounter />  
     {/* <ReactReduxthunk /> */}
    </div>
  );
}

export default App;
