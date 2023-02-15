import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counterSlice = useSelector(state => state.counter);
  const counter = counterSlice.counter;
  const showCounter = counterSlice.showCounter;

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  const increaseHandler = () => {
    // { type: SOME_UNIQUE_IDENTOFOER, payload: 5 }
    dispatch(counterActions.increase(5));
  };


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className={classes.buttons}>
        <button onClick={incrementHandler} type="button">Increment</button>
        <button onClick={increaseHandler} type="button">Increase by 5</button>
        <button onClick={decrementHandler} type="button">Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
