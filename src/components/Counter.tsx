import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store/index';
import { counterActions } from '../store/index';

import classes from './Counter.module.scss';

const Counter = () => {
  const counter = useSelector<State, number>((state) => state.counter);
  const show = useSelector<State, boolean>((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
