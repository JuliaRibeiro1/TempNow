import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import CurrentCard from './Components/Cards/CurrentCard/CurrentCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <CurrentCard/>
    </div>
  );
}

export default App;
