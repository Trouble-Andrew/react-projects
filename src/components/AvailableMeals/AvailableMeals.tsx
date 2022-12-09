import React from 'react';
import styles from './AvailableMeals.module.scss';
import { MEALS } from '../../data';

function AvailableMeals() {
  const mealsList = MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={styles.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
}

export default AvailableMeals;
