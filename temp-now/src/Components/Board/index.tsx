import React from 'react'
import styles from "./Board.module.css"
import windIcon from "../../Assets/wind-direction-icon.png"
import rainIcon from "../../Assets/rain-percentage.png"
import Header from './Header.js'
import currentWeatherIcon from '../../Utils/currentWeatherIcon'

interface BoardProps {
    temperature: number | undefined,
    wind : number,
    rain: number,
    snow: number
}

function Board({temperature, wind, rain, snow} : BoardProps) {
    console.log(temperature)
    if(temperature) {
    const img = currentWeatherIcon(temperature, rain, snow)
      return (
    <section className={`${styles.currentBoard} blur`}>
            <Header data={new Date()}/>
            <div className={styles.currentWeatherData}>
            <div>
                <img/>
                <div className={styles.weatherSection}>
                    <img src={img}/>

                    <div>
                        {Math.ceil(temperature)}
                    </div>
                           
                    <span className={styles.weatherDegree}>°c</span>
                </div>
            </div>
            <div className={styles.weatherConditionsSection}>
                <div>
                    <img src={windIcon}/>
                    <div>{Math.ceil(wind)}</div>
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
      else {
        <div>ofeefeggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</div>
      }
}

export default Board