import React from 'react';
import { useParams, Route } from 'react-router';
import Comments from 'components/comments/Comments';
import HighlightedQuote from 'components/quotes/HighlightedQuote';

interface Params {
  quoteId: string;
}

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

const QuoteDetail = () => {
  const params = useParams<Params>();

  const quote = QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/:quoteId/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
