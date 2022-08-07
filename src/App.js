import { React, useState } from "react";
import styles from "./style.module.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  };

  const reset = () => {
    setCounter(0)
  }

  return (
    <div className={styles.counter}>
      <h1 className={styles.counter__h1}>Counter</h1>
      <span className={styles.counter__output}>{counter}</span>
      <div className={styles.btn__container}>
        <button className={styles.control__btn} onClick={increase}>+</button>
        <button className={styles.control__btn} onClick={decrease}>-</button>
        <button className={styles.reset} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}