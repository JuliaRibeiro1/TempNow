import React from 'react'
import icon from "../../../Assets/weather-icon.png"
import styles from "./Card.module.css"
import useFetch from '../../../Hooks/useFetch'

function Card() {
  const {data} = useFetch("https://api.open-meteo.com/v1/forecast?latitude=-23.5475&longitude=-46.6361&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,rain,snowfall,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,snowfall_sum,windspeed_10m_max&timezone=GMT&forecast_days=3&models=best_match")
  console.log(data)
  return (
    <section className={`${styles.section} cardBlur`}>
      <div>
        <div className={`${styles.cardContainer} center`}>
          <div className={`${styles.date} center`}>
              <div>28</div>
              <div>Seg</div>
          </div>
          <img src={icon}/>
          </div>
          <div className={styles.minMaxContainer}>
              <div>Máxima 11°</div>
              <div>Mínima 17°</div>
          </div>
        
        </div>
    </section>
  )
}

export default Card