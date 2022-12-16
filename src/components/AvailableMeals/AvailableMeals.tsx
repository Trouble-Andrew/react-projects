import React, { useEffect, useState } from 'react';
import styles from './AvailableMeals.module.scss';
// import { MEALS } from '../../data';
import Card from 'components/Card/Card';
import MealItem from 'components/MealItem/MealItem';
import { BASE_URL, DATA } from '../../constants';
import { Meal } from '../../interfaces';

interface ResponseMeals {
  [key: string]: {
    name: string;
    description: string;
    price: number;
  };
}

function AvailableMeals() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(`${BASE_URL}${DATA.MEALS}`);
      const responseData: ResponseMeals = await response.json();

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      console.log(responseData);

      const loadedMeals: Meal[] = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error: unknown) => {
      if (error instanceof Error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
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
