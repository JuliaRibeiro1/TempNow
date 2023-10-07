import React from 'react'
import styles from "./Board.module.css"
import windIcon from "../../Assets/wind-direction-icon.png"
import rainIcon from "../../Assets/rain-percentage.png"
import icon from "../../Assets/weather-icon.png"
function Board() {
  return (
    <section className={styles.currentBoard}>
        <h2 className={styles.date}>24 de Agosto de 2023</h2>
        
            <span className={styles.day}>Domingo</span>
            <div className={styles.currentWeatherData}>
            <div>
                <img/>
                <div className={styles.weatherSection}>
                    <img src={icon}/>
                    <div>
                        23
                    </div>
                    <span className={styles.weatherDegree}>°c</span>
                </div>
            </div>
            <div className={styles.weatherConditionsSection}>
                <div>
                    <img src={windIcon}/>
                    <div>Wind 10KM</div>
                </div>
                <div>
                    <img src={rainIcon}/>
                    <div>Chuva 50%</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Board