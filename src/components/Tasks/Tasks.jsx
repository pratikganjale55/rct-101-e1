import React from "react";

import styles from "./tasks.module.css";

const Tasks = () => {

  
  
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>

       {/* <Task/> */}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      
      </div>
    </>
  );
};

export default Tasks;
