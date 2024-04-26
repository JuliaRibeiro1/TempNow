import React from 'react'
import styles from "./Header.module.css"
import getDayWeek from '../../Utils/getDayWeek';

interface HeaderProps {
  data: Date;
}

function Header({data} : HeaderProps) {
const formatModel: Intl.DateTimeFormatOptions  = { year: 'numeric', month: 'long', day: 'numeric' };

const brazilianFormat: Intl.DateTimeFormat = new Intl.DateTimeFormat('pt-BR', formatModel);
const dayWeek = data.getDay()
const {day} = getDayWeek(dayWeek)

const dataFormatada: string = brazilianFormat.format(data);
console.log(data)
  return (
    <header className={styles.header}>
        <h2 className={styles.date}>{dataFormatada}</h2>
        <h3 className={styles.day}>{day}</h3>
    </header>
  )
}

export default Header