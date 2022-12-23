import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import QuoteForm from 'components/quotes/QuoteForm';
import { Quote } from 'interfaces';
import useHttp from 'hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);

  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'completed') {
      navigate('/quotes');
    }
  }, [status, navigate]);

  const addQuoteHandler = (quoteData: Pick<Quote, 'author' | 'text'>) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm
      onAddQuote={addQuoteHandler}
      isLoading={status === 'pending' ? true : false}
    />
  );
};

export default NewQuote;
