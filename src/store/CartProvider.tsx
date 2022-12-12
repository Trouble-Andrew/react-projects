import React, { useReducer } from 'react';
import CartContext from './cart-context';
import { CartItem } from 'interfaces';

interface CartProviderProps extends React.ComponentPropsWithoutRef<'div'> {}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const defaultCartState: CartState = {
  items: [],
  totalAmount: 0,
};

type ACTIONTYPE =
  | { type: 'ADD'; payload: CartItem }
  | { type: 'REMOVE'; payload: string };

function CartReducer(
  state: typeof defaultCartState,
  action: ACTIONTYPE,
): CartState {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.payload);
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return state;
}

function CartProvider({ children }: CartProviderProps) {
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState,
  );

  function addItemToCartHandler(item: CartItem) {
    dispatchCartAction({ type: 'ADD', payload: item });
  }

  function removeItemFromCartHandler(id: string) {
    dispatchCartAction({ type: 'REMOVE', payload: id });
  }

  const cartContext = {
    items: cartState?.items,
    totalAmount: cartState?.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
