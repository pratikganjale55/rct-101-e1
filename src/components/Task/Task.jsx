import React,{useState}from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";


const Task = ({title, id,handleDelete} ) => {
  const [isStrike , setIsstrike] = useState(false)
 



  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" onClick= {() => setIsstrike(!isStrike)}/>
      
      <div data-cy="task-text" key={id} style = {{textDecorationLine :  isStrike ? "line-through" : "" }}>
       {title}
      </div>
      {/* Counter here */}
           <Counter/>
      <button data-cy="task-remove-button" onClick={() => handleDelete(id)}>Delete</button>
    </li>
  )
};

export default Task;
