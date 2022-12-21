import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link className="btn" to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
