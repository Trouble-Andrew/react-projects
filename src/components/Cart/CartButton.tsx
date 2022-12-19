import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'store';
import { UIActions } from 'store/uiSlice';
import classes from './CartButton.module.scss';

interface CartButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

const CartButton = (props: CartButtonProps) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector<State, number>(
    (state) => state.cart.totalQuantity,
  );

  const clickHandler = () => {
    dispatch(UIActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
