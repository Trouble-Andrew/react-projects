import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import configureProductsStore from 'hooks-store/products-store';

import './index.scss';
import App from './App';

// @ts-ignore
const root = createRoot(document.getElementById('root'));

configureProductsStore();

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
