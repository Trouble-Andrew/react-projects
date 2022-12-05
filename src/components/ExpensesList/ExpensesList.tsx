import React from 'react';
import './ExpensesList.scss';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

import { ExpenseItemProps } from '../ExpenseItem/ExpenseItemProps';
import { ExpenseListProps } from './ExpenseListProps';

function ExpensesList({ expenses }: ExpenseListProps) {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense: ExpenseItemProps) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          key={expense.id}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
