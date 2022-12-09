import React from 'react';
import { CardProps } from './CardProps';
import styles from './Card.module.scss';

function Card(props: CardProps) {
  return <div className={styles.card}>{props.children}</div>;
}

export default Card;
