import React, { useContext } from 'react';
import Modal from 'components/Modal/Modal';
import styles from './Cart.module.scss';
import { CartProps } from './CartProps';
import CartContext from 'store/cart-context';
import CartItem from 'CartItem/CartItem';
import { CartItem as CartItemInterface } from 'interfaces';

function Cart({ onClose }: CartProps) {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  function cartItemRemoveHandler() {}

  function cartItemAddHandler() {}

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={styles['button']}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
