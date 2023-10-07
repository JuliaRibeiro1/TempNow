import React from 'react'
import styles from "./CurrentCard.module.css"

function CurrentCard() {
  return (
    <section className={styles.currentCard}>
        <header>24 de Agosto de 2023</header>
        <div>
            <span>Domingo</span>
            <div>
                <img/>
                <div>
                    <div>17</div>
                    <span>°c</span>
                </div>
            </div>
            <div>
                <div>
                    <img/>
                    <div>Wind 10KM</div>
                </div>
                <div>
                    <img/>
                    <div>Chuva 50%</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CurrentCard