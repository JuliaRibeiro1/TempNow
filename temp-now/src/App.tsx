import React from "react"
import './App.css';
import Card from './Components/Cards/Card';
import Header from './Components/Header';
import Board from "./Components/Board";
import useFetch from "./Hooks/useFetch";

function App() {
  const {data} = useFetch("https://api.open-meteo.com/v1/forecast?latitude=-23.5475&longitude=-46.6361&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,rain,snowfall,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,snowfall_sum,windspeed_10m_max&timezone=GMT&forecast_days=3&models=best_match")
  console.log(data)
  if(!data) {

  }
  else {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <Board temperature={data.temperature_2m} wind={20} rain={20}/>
        <Card/>
      </div>
    </div>
  );
  }
}

export default App;
