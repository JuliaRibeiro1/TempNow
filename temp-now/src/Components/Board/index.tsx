import React from 'react'
import styles from "./Board.module.css"
import windIcon from "../../Assets/wind-direction-icon.png"
import rainIcon from "../../Assets/rain-percentage.png"
import icon from "../../Assets/weather-icon.png"
import Header from './Header.js'


function Board(temperature : Number) {
      return (
    <section className={`${styles.currentBoard} blur`}>
            <Header data={new Date()}/>
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