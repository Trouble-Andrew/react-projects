import React from 'react';
import { nanoid } from 'nanoid';
import './NewExpense.scss';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { EnteredData } from 'components/ExpenseForm/ExpenseFormProps';
import { NewExpenseProps } from './NewExpenseProps';

function NewExpense(props: NewExpenseProps) {
  function saveExpenseDataHandler(enteredExpenseData: EnteredData) {
    const expenseData = {
      ...enteredExpenseData,
      id: nanoid(),
    };

    props.onAddExpense(expenseData);
    return expenseData;
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
