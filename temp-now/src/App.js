import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import CurrentCard from './Components/Board/Board';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Header/>
      <CurrentCard/>
      </div>
    </div>
  );
}

export default App;
