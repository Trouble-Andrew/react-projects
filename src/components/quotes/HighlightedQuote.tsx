import React from 'react';
import classes from './HighlightedQuote.module.scss';
import { Quote as HighlightedQuoteProps } from 'interfaces';

const HighlightedQuote = (props: HighlightedQuoteProps) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
