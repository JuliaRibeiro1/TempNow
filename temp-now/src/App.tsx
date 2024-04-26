import React from "react"
import './App.css';
import Header from './Components/Header';
import Board from "./Components/Board";
import useFetch from "./Hooks/useFetch";
import CardsContainer from "./Components/Cards/Card/CardsContainer/CardsContainer";
import currentWeatherVideo from "./Utils/currentWeatherVideo";

function App() {
 
  const {data,dailyData,currentData,temperature} = useFetch()
  console.log(data)
  console.log(temperature)

  if(!data && !dailyData) {
    <div>Não foi possível acessar a temperatura</div>
  }

  else {

  const backgroundVideo = currentWeatherVideo(Math.ceil(currentData?.rain|| 0), Math.ceil(currentData?.snowfall|| 0))
  console.log(backgroundVideo)
    return (
      <div className="App">
         <video autoPlay muted loop className="backgroundVideo">
        <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className='container'>
          <Header/>
          <Board temperature={currentData?.temperature_2m} wind={Math.ceil(currentData?.windspeed_10m || 0)} rain={Math.ceil(currentData?.rain || 0)} snow={Math.ceil(currentData?.snowfall || 0)}/>
          <CardsContainer daily={dailyData}/>
        </div>

      </div>
    );
  }
}

export default App;
