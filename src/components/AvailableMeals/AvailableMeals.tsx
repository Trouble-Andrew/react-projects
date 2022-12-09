import React from 'react';
import styles from './AvailableMeals.module.scss';
import { MEALS } from '../../data';
import Card from 'components/Card/Card';
import MealItem from 'components/MealItem/MealItem';

function AvailableMeals() {
  const mealsList = MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
