import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  increment,
  alterByAmount,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
        <button
          className="Cookie-logo"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(alterByAmount(incrementValue))}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
