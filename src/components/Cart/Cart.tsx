import React from 'react';
import Modal from 'components/Modal/Modal';
import styles from './Cart.module.scss';
import { CartProps } from './CartProps';

function Cart({ onClose }: CartProps) {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'c1', name: 'sushi', price: '12.99', amount: 2 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>
          Close
        </button>
        <button className={styles['button']}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
