import React from 'react'
import icon from "../../../Assets/weather-icon.png"
import styles from "./Card.module.css"


function Card() {
 
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