import React from 'react';
import './ExpenseList.scss';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import { ExpenseItemProps } from '../ExpenseItem/ExpenseItemProps';
import { ExpenseListProps } from './ExpenseListProps';

function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <div className="expenses">
      {expenses.map((expense: ExpenseItemProps) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
