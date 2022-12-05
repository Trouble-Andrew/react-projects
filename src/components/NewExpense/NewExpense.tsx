import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './NewExpense.scss';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { EnteredData } from 'components/ExpenseForm/ExpenseFormProps';
import { NewExpenseProps } from './NewExpenseProps';

function NewExpense(props: NewExpenseProps) {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData: EnteredData) {
    const expenseData = {
      ...enteredExpenseData,
      id: nanoid(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
    return expenseData;
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
