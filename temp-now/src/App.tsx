import React from "react"
import './App.css';
import Header from './Components/Header';
import Board from "./Components/Board";
import useFetch from "./Hooks/useFetch";
import CardsContainer from "./Components/Cards/Card/CardsContainer/CardsContainer";
import background from "./Assets/background.mp4"

function App() {
 
  const {data,daily,temperature} = useFetch()
console.log(temperature)
  if(!data && !daily) {
    
  }

  else {

    return (
      <div className="App">
         <video autoPlay muted loop className="backgroundVideo">
        <source src={background} type="video/mp4" />
        </video>
        <div className='container'>
          <Header/>
          <Board temperature={temperature[0][0]} wind={20} rain={20}/>
          <CardsContainer daily={daily}/>
        </div>

      </div>
    );
  }
}

export default App;
