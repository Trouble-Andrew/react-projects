import React from 'react';
import './ExpenseList.scss';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpensesFilter from 'components/ExpensesFilter/ExpensesFilter';

import { ExpenseItemProps } from '../ExpenseItem/ExpenseItemProps';
import { ExpenseListProps } from './ExpenseListProps';

function ExpenseList({ expenses }: ExpenseListProps) {
  const [year, setYear] = React.useState(String(new Date().getFullYear()));

  function changeYearHandler(year: string) {
    setYear(year);
  }

  return (
    <div className="expenses">
      <ExpensesFilter currentYear={year} onChangeYear={changeYearHandler} />
      {expenses.map((expense: ExpenseItemProps) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          key={expense.id}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
