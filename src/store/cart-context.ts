import { CartItem } from 'interfaces';
import React from 'react';

interface CartContextInterface {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

const CartContext = React.createContext<CartContextInterface>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
