import React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'store/index';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const cartIsShown = useSelector<State, boolean>(
    (state) => state.ui.cartIsShown,
  );

  return (
    <React.StrictMode>
      <Layout>
        {cartIsShown && <Cart />}

        <Products />
      </Layout>
    </React.StrictMode>
  );
}

export default App;
