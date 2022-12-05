import React, { useState } from 'react';
import './ExpenseForm.scss';
import { ExpenseFormProps } from './ExpenseFormProps';

// interface InputState {
//   enteredTitle: string;
//   enteredAmount: string;
//   enteredDate: string;
// }

function ExpenseForm({ onSaveExpenseData, onCancel }: ExpenseFormProps) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState<InputState>({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  function titleChangeHandler(e: React.FormEvent<HTMLInputElement>) {
    setEnteredTitle(e.currentTarget.value);

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: e.currentTarget.value,
    //   };
    // });
  }

  function amountChangeHandler(e: React.FormEvent<HTMLInputElement>) {
    setEnteredAmount(e.currentTarget.value);

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: e.currentTarget.value,
    //   };
    // });
  }

  function dateChangeHandler(e: React.FormEvent<HTMLInputElement>) {
    setEnteredDate(e.currentTarget.value);

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: e.currentTarget.value,
    //   };
    // });
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
    clearForm();
  }

  function clearForm() {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form action="#" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            placeholder="1.99"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button
          type="button"
          onClick={onCancel}
          className="new-expense__cancel"
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
