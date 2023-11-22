import React from 'react'
import styles from "./Header.module.css"

interface HeaderProps {
  data: Date;
}

function Header({data} : HeaderProps) {

  return (
    <header className={styles.header}>
        <h2 className={styles.date}>{data.toDateString()}</h2>
        <h3 className={styles.day}>Domingo</h3>
    </header>
  )
}

export default Header