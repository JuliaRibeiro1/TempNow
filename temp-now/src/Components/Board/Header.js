import React from 'react'
import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
        <h2 className={styles.date}>24 de Agosto de 2023</h2>
        <h3 className={styles.day}>Domingo</h3>
    </header>
  )
}

export default Header