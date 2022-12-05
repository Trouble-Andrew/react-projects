import React from 'react';
import './ExpenseItem.scss';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import { ExpenseItemProps } from './ExpenseItemProps';
import Card from '../Card/Card';

function ExpenseItem(props: ExpenseItemProps) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
