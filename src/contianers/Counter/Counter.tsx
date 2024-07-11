import styles from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import { decrease, decreaseBy, increase, increaseBy } from './CounterSlice.ts';

export const Counter = () => {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.Counter}>
      <h1>{counterValue}</h1>
      <button onClick={() => dispatch(increase())}>Add</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(increaseBy(5))}>Increase by 5</button>
      <button onClick={() => dispatch(decreaseBy(5))}>Decrease by 5</button>
    </div>
  );
};
