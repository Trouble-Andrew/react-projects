import React from 'react';
import styles from './CartItem.module.scss';
import { CartItemProps } from './CartItemProps';

function CartItem({ name, price, amount, onRemove, onAdd }: CartItemProps) {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{formattedPrice}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
}

export default CartItem;
