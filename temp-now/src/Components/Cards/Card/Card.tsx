import React from 'react'
import icon from "../../../Assets/weather-icon.png"
import styles from "./Card.module.css"
import getDayWeek from "../../../Utils/getDayWeek.js"

interface CardProps {
  daily: DailyData | null,
  currentCardIndex: number

  
}

function Card({daily, currentCardIndex} : CardProps ) {
  
 if(daily) {
  const dateConvert = new Date(daily.time[currentCardIndex])
  const dayWeek = dateConvert.getDay()
  const {dayInitials} = getDayWeek(dayWeek)
  return (
    <section className={`${styles.section} cardBlur`}>
      <div>
        <div className={`${styles.cardContainer} center`}>
          <div className={`${styles.date} center`}>
              <div>{dateConvert.getDate() < 9 ? "0" + dateConvert.getDate() : dateConvert.getDate()}</div>
              <div>{dayInitials}</div>
          </div>
          <img src={icon}/>
          </div>
          <div className={styles.minMaxContainer}>
              <div>{`Máxima ${Math.ceil(daily.temperature_2m_max[currentCardIndex])}`}</div>
              <div>{`Mínima° ${Math.ceil(daily.temperature_2m_min[currentCardIndex])}`}</div>
          </div>
        
        </div>
    </section>
  )
 }
}

export default Card