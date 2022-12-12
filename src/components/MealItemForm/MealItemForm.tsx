import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.scss';
import Input from 'components/Input/Input';
import { MealItemFormProps } from './MealItemFormProps';

function MealItemForm({ id, onAddToCart }: MealItemFormProps) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredAmount = amountInputRef.current?.value;
    const enteredAmountNumber = Number(enteredAmount);

    if (
      enteredAmount?.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
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
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default MealItemForm;
