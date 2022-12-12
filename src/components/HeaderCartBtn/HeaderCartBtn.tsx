import React, { useContext } from 'react';
import CartContext from 'store/cart-context';
import CartIcon from '../CartIcon/CartIcon';
import styles from './HeaderCartBtn.module.scss';
import { HeaderCartBtnProps } from './HeaderCartBtnProps';

function HeaderCartBtn(props: HeaderCartBtnProps) {
  const ctx = useContext(CartContext);

  const totalItems = ctx?.items.reduce((currentNumber, item) => {
    if (item.amount) {
      return currentNumber + item?.amount;
    } return currentNumber;
  }, 0);

  return (
    <button onClick={props.onClick} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalItems}</span>
    </button>
  );
}

export default HeaderCartBtn;
