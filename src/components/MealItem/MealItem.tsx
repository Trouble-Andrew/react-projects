import React from 'react';
import styles from './MealItem.module.scss';
import { MealItemProps } from './MealItemProps';
import MealItemForm from 'components/MealItemForm/MealItemForm';

function MealItem({ name, description, price, id }: MealItemProps) {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
}

export default MealItem;
