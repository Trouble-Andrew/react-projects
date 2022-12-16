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
  | { type: 'REMOVE'; payload: string }
  | {
      type: 'CLEAR';
    };

function CartReducer(
  state: typeof defaultCartState,
  action: ACTIONTYPE,
): CartState {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id,
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload,
    );

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.payload);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === 'CLEAR') {
    return defaultCartState;
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

  const clearCartHandler = function clearCartHandler() {
    dispatchCartAction({ type: 'CLEAR' });
  };

  const cartContext = {
    items: cartState?.items,
    totalAmount: cartState?.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
