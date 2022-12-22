import React, { useEffect } from 'react';
import { useParams, Route } from 'react-router';
import { Link, useRouteMatch } from 'react-router-dom';
import Comments from 'components/comments/Comments';
import HighlightedQuote from 'components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import { Quote } from 'interfaces';
import LoadingSpinner from 'components/UI/LoadingSpinner';

interface Params {
  quoteId: string;
}

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams<Params>();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
