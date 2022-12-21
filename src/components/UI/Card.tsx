import React from 'react';
import classes from './Card.module.css';

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {}

const Card = (props: CardProps) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
