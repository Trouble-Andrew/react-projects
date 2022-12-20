import { BASE_URL, DATA } from '../constants';
import { CartState } from './cartSlice';
import { UIActions } from './uiSlice';
import { cartActions } from './cartSlice';

export const fetchCartData = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}${DATA.CART}`);

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        UIActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        }),
      );
    }
  };
};

export const sendCartData = (cart: CartState) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return async (dispatch) => {
    dispatch(
      UIActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }),
    );

    const sendRequest = async () => {
      const response = await fetch(`${BASE_URL}${DATA.CART}`, {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        UIActions.showNotification({
          status: 'success',
          title: 'Success...',
          message: 'Sent cart successfully!',
        }),
      );
    } catch (error) {
      dispatch(
        UIActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        }),
      );
    }
  };
};
