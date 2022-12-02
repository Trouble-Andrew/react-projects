import React from 'react';
import './Card.scss';
import { CardProps } from './CardProps';

function Card(props: CardProps) {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
