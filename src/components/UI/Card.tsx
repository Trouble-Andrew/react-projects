import React from 'react';

import './Card.scss';

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {}

const Card = (props: CardProps) => {
  return (
    <div className="card" style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
