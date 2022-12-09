import React from 'react';
import styles from './MealItemForm.module.scss';
import Input from 'components/Input/Input';
import { MealItemFormProps } from './MealItemFormProps';

function MealItemForm({id}: MealItemFormProps) {
  return (
    <form className={styles.form}>
      <Input
        label={'Amount'}
        input={{
          id: id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default MealItemForm;
