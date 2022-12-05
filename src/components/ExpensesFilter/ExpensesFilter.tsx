import React from 'react';
import './ExpensesFilter.scss';
import { ExpensesFilterProps } from './ExpensesFilterProps';

function ExpensesFilter(props: ExpensesFilterProps) {

  function selectHandler(e: React.FormEvent<HTMLSelectElement>) {
    props.onChangeYear(e.currentTarget.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.currentYear} onChange={selectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
