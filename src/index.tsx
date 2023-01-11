import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from 'context/products-context';

import './index.scss';
import App from './App';

// @ts-ignore
const root = createRoot(document.getElementById('root'));

root.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>,
);
