import React from "react"
import './App.css';
import Card from './Components/Cards/Card';
import Header from './Components/Header';
import Board from "./Components/Board";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <Board temperature={16} wind={20} rain={20}/>
        <Card/>
      </div>
    </div>
  );
}

export default App;
