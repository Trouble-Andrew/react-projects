import React from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from 'components/ExpensesChart/ExpensesChart';
import './Expenses.scss';

import { ExpenseListProps } from '../ExpensesList/ExpenseListProps';


function Expenses({ expenses }: ExpenseListProps) {
  const [year, setYear] = React.useState(String(new Date().getFullYear()));

  function changeYearHandler(year: string) {
    setYear(year);
  }

  const filteredExpensesByYear = expenses.filter(
    (expense) => year === String(new Date(expense.date).getFullYear()),
  );
  return (
    <div className="expenses">
      <ExpensesFilter currentYear={year} onChangeYear={changeYearHandler} />
      <ExpensesChart expenses={filteredExpensesByYear} />
      <ExpensesList expenses={filteredExpensesByYear} />
    </div>
  );
}

export default Expenses;
