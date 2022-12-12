import React, { useContext } from 'react';
import styles from './MealItem.module.scss';
import { MealItemProps } from './MealItemProps';
import MealItemForm from 'components/MealItemForm/MealItemForm';
import CartContext from 'store/cart-context';

function MealItem({ name, description, price, id }: MealItemProps) {
  const cartCtx = useContext(CartContext);
  const formattedPrice = `$${price.toFixed(2)}`;

  function addToCartHandler(amount: number) {
    cartCtx?.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
