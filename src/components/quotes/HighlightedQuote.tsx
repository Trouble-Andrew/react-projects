import React from 'react';
import classes from './HighlightedQuote.module.scss';
import { Quote } from 'interfaces';

const HighlightedQuote = (props: Pick<Quote, 'author' | 'text'>) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
