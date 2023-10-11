import React from 'react'
import logo from "../../Assets/logo.png"
import locationIcon from "../../Assets/location-icon.png"
import styles from "../Header/Header.module.css"
import DegreeBtn from '../DegreeBtn'

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo}/>
      <div className="center">
      <p className={`${styles.location} blur`}>
        Avenida Paulista,  1123 - São Paulo/SP
        <span>
          <img className={styles.locationIcon} src={locationIcon}/>
        </span>
      </p>
      <DegreeBtn/>
      </div>
    </header>
  )
}

export default Header