import React, { useEffect } from 'react';
import { useParams, Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from 'components/comments/Comments';
import HighlightedQuote from 'components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from 'components/UI/LoadingSpinner';

const QuoteDetail = () => {
  const params = useParams();

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
      <Routes>
        <Route
          path={``}
          element={
            <div className="centered">
              <Link to="comments" className="btn--flat">
                Load Comments
              </Link>
            </div>
          }
        />
        <Route path={`comments`} element={<Comments />} />
      </Routes>
    </>
  );
};

export default QuoteDetail;
