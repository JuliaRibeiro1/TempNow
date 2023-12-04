import React from 'react'
import icon from "../../../Assets/weather-icon.png"
import styles from "./Card.module.css"


interface DailyData {
  temperature_2m_max: number[];
  // Add other properties as needed
}

interface CardProps {
  temperatures: number[];
  daily: DailyData,
  index: number
  
}

function Card({temperatures,daily, index} : CardProps ) {
 console.log(daily)
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
              <div>{`Máxima ${daily.temperature_2m_max[index]}`}</div>
              <div>Mínima 17°</div>
          </div>
        
        </div>
    </section>
  )
}

export default Card