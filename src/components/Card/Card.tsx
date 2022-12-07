import React from 'react';
import styles from './Card.module.scss';
import { CardProps } from './CardProps';

function Card({ children, className }: CardProps) {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
}

export default Card;
