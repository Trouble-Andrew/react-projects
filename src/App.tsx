import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'store/index';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Notification as NotificationInterface } from 'store/uiSlice';
import Notification from 'components/Notification/Notification';
import { CartState } from 'store/cartSlice';
import { sendCartData, fetchCartData } from 'store/cart-actions';

let isInitial = true;

function App() {
  const cartIsShown = useSelector<State, boolean>(
    (state) => state.ui.cartIsShown,
  );
  const cart = useSelector<State, CartState>((state) => state.cart);
  const notification = useSelector<State, NotificationInterface | null>(
    (state) => state.ui.notification,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <React.StrictMode>
      <>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        <Layout>
          {cartIsShown && <Cart />}

          <Products />
        </Layout>
      </>
    </React.StrictMode>
  );
}

export default App;
