import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = props => {
  const [title, setTitle] = useState(props.title); // destructuring because useState returns array. First element is always value stored in props.title and the second element is a function for updating first element.

  const clickHandler = () => {
    setTitle('Updated');
  };

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
