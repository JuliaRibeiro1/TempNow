import React from 'react'
import styles from "./Header.module.css"

interface HeaderProps {
  data: Date;
}

function Header({data} : HeaderProps) {
const formatModel: Intl.DateTimeFormatOptions  = { year: 'numeric', month: 'long', day: 'numeric' };

const brazilianFormat: Intl.DateTimeFormat = new Intl.DateTimeFormat('pt-BR', formatModel);
const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

const dataFormatada: string = brazilianFormat.format(data);
console.log(data)
  return (
    <header className={styles.header}>
        <h2 className={styles.date}>{dataFormatada}</h2>
        <h3 className={styles.day}>{weekDays[data.getDay()]}</h3>
    </header>
  )
}

export default Header