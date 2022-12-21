import { Quote } from 'interfaces';
import React from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.scss';

interface QuoteListProps {
  quotes: Quote[];
}

const QuoteList = (props: QuoteListProps) => {
  return (
    <>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
