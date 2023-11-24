import React from 'react'
import styles from "./Board.module.css"
import windIcon from "../../Assets/wind-direction-icon.png"
import rainIcon from "../../Assets/rain-percentage.png"
import icon from "../../Assets/weather-icon.png"
import Header from './Header.js'

interface BoardProps {
    temperature: number,
    wind : number,
    rain: number
}

function Board({temperature, wind, rain} : BoardProps) {
      return (
    <section className={`${styles.currentBoard} blur`}>
            <Header data={new Date()}/>
            <div className={styles.currentWeatherData}>
            <div>
                <img/>
                <div className={styles.weatherSection}>
                    <img src={icon}/>
                    <div>
                        {temperature}
                    </div>
                    <span className={styles.weatherDegree}>°c</span>
                </div>
            </div>
            <div className={styles.weatherConditionsSection}>
                <div>
                    <img src={windIcon}/>
                    <div>{wind}</div>
                </div>
                <div>
                    <img src={rainIcon}/>
                    <div>{rain} </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Board