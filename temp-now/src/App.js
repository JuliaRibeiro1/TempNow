import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import CurrentCard from './Components/Board';
import Card from './Components/Cards/Card';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <CurrentCard/>
        <Card/>
      </div>
    </div>
  );
}

export default App;
