import React from 'react';
import QuoteForm from 'components/quotes/QuoteForm';
import { Quote } from 'interfaces';

const NewQuote = () => {
  const addQuoteHandler = (quoteData: Quote) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} isLoading={false} />;
};

export default NewQuote;
