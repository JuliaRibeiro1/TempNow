import React from 'react'
import styles from "./Card.module.css"
import getDayWeek from "../../../Utils/getDayWeek.js"
import currentWeatherIcon from '../../../Utils/currentWeatherIcon'

interface CardProps {
  daily: DailyInterface | null,
  currentCardIndex: number
}

function Card({daily, currentCardIndex} : CardProps ) {

 if(daily) {
 
  const dateConvert = new Date(daily.time[currentCardIndex])
  const day = (dateConvert.getDate()) + 1
  const dayWeek = (dateConvert.getDay()) + 1 > 6 ? 0 : (dateConvert.getDay()) + 1
  const img = currentWeatherIcon(daily.temperature_2m_max[currentCardIndex])
 
  const {dayInitials} = getDayWeek(dayWeek) 


  return (
    <section className={`${styles.section} cardBlur`}>
      <div>
        <div className={`${styles.cardContainer} center`}>
          <div className={`${styles.date} center`}>
              <div>{day < 9 ? "0" + day : day}</div>
              <div>{dayInitials ? dayInitials : "Domingo"}</div>
          </div>
          <img src={img}/>
          </div>
          <div className={styles.minMaxContainer}>
              <div>{`Máxima ${Math.ceil(daily.temperature_2m_max[currentCardIndex])}°`}</div>
              <div>{`Mínima ${Math.ceil(daily.temperature_2m_min[currentCardIndex])}°`}</div>
          </div>
        
        </div>
    </section>
  )
 }
}

export default Card