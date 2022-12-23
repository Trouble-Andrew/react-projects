import Layout from 'components/layout/Layout';
import AllQuotes from 'pages/AllQuotes';
import NewQuote from 'pages/NewQuote';
import NotFound from 'pages/NotFound';
import QuoteDetail from 'pages/QuoteDetail';
import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
