import React from 'react'
import styles from "./Header.module.css"

interface HeaderProps {
  data: Date;
}

function Header({data} : HeaderProps) {
const opcoesDeFormato: Intl.DateTimeFormatOptions  = { year: 'numeric', month: 'long', day: 'numeric' };

const formatoBrasileiro: Intl.DateTimeFormat = new Intl.DateTimeFormat('pt-BR', opcoesDeFormato);
const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

const dataFormatada: string = formatoBrasileiro.format(data);
console.log(data)
  return (
    <header className={styles.header}>
        <h2 className={styles.date}>{dataFormatada}</h2>
        <h3 className={styles.day}>{diasDaSemana[data.getDay()]}</h3>
    </header>
  )
}

export default Header