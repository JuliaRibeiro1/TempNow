import React from 'react';
import Card from '../Card';
import styles from "./CardsContainer.module.css"

interface CardProps {
  daily: DailyInterface | null,
}

function CardsContainer({ daily }: CardProps) {
  const cardElements = [];
 
  if(daily && daily.time) {
    console.log(daily)
    for (let i = 1; i < daily.time.length; i++) {
      console.log(i)
      cardElements.push(<Card key={i} daily={daily} currentCardIndex={i} />);
    }
  }

  return <div className={styles.cardsContainer}>{cardElements}</div>;
}

export default CardsContainer;
