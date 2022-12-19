import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.scss';
import CartItem from './CartItem';
import { State } from 'store';
import { CartItem as CartItemInterface } from 'interfaces';

const Cart = () => {
  const cartItems = useSelector<State, CartItemInterface['item'][]>(
    (state) => state.cart.items,
  );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              title: item.title,
              quantity: item.quantity,
              totalPrice: item.totalPrice,
              price: item.price,
              id: item.id,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
