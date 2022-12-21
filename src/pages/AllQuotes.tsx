import React from 'react';
import QuoteList from 'components/quotes/QuoteList';

const QUOTES = [
  {
    id: 'q1',
    author: 'John',
    text: 'Learning  React is fun!',
  },
  {
    id: 'q2',
    author: 'Max',
    text: 'Learning  React is great!',
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={QUOTES} />;
};

export default AllQuotes;
