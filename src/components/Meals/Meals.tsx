import React from 'react';
import MealsSummary from 'components/MealsSummary/MealsSummary';
import AvailableMeals from 'components/AvailableMeals/AvailableMeals';

function Meals() {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
}

export default Meals;
