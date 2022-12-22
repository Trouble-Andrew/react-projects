import React from 'react';
import { useHistory } from 'react-router';
import QuoteForm from 'components/quotes/QuoteForm';
import { Quote } from 'interfaces';

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData: Pick<Quote, 'author' | 'text'>) => {
    console.log(quoteData);

    history.push('/quotes');
  };

  return <QuoteForm onAddQuote={addQuoteHandler} isLoading={false} />;
};

export default NewQuote;
