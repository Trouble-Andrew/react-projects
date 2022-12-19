import React from 'react';
import classes from './Card.module.scss';

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {}

const Card = (props: CardProps) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
