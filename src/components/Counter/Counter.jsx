import React,{useState} from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [count, setCount] = useState(0);
  
  const handleIncreament = (x) => {
    
    setCount(count+1)
  }
  const handleDecreament = (x) => {
   
    setCount(count-1)
  }

 
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick = {() => handleIncreament(1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" disabled={count == 0} onClick = {() =>handleDecreament(1) } >-</button>
    </div>
  );
};

export default Counter;
