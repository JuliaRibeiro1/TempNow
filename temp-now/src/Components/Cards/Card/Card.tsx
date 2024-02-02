import React from 'react'
import icon from "../../../Assets/weather-icon.png"
import styles from "./Card.module.css"


interface CardProps {
  daily: DailyData | null,
  currentCardIndex: number

  
}

function Card({daily, currentCardIndex} : CardProps ) {
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
              <div>{`Máxima ${daily && Math.ceil(daily.temperature_2m_max[currentCardIndex])}`}</div>
              <div>{`Mínima° ${daily && Math.ceil(daily.temperature_2m_min[currentCardIndex])}`}</div>
          </div>
        
        </div>
    </section>
  )
}

export default Card