import React from 'react';
import { useParams, Route } from 'react-router';
import { Link, useRouteMatch } from 'react-router-dom';
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
  const match = useRouteMatch();
  const params = useParams<Params>();

  const quote = QUOTES.find((quote) => quote.id === params.quoteId);

  console.log(match);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
