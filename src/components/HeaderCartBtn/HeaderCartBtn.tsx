import React, { useContext, useEffect, useState } from 'react';
import CartContext from 'store/cart-context';
import CartIcon from '../CartIcon/CartIcon';
import styles from './HeaderCartBtn.module.scss';
import { HeaderCartBtnProps } from './HeaderCartBtnProps';

function HeaderCartBtn(props: HeaderCartBtnProps) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const ctx = useContext(CartContext);
  const { items } = ctx;
  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  const totalItems = items.reduce((currentNumber, item) => {
    if (item.amount) {
      return currentNumber + item?.amount;
    }
    return currentNumber;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalItems}</span>
    </button>
  );
}

export default HeaderCartBtn;
