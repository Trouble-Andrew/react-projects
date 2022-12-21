import React from 'react';
import classes from './QuoteItem.module.scss';
import { Quote as QuoteProps } from 'interfaces';

const QuoteItem = (props: QuoteProps) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <a className="btn">View Fullscreen</a>
    </li>
  );
};

export default QuoteItem;
