import React,{useState} from "react";
import styles from "./addTask.module.css";
import {v4 as uuidv4} from "uuid" ;

import Task from "../Task/Task";
import Tasks from "../Tasks/Tasks";


const AddTask = () => {
 
  const[query,setQuery] = useState("") ;
  const [data, setData] = useState([]) ;
  // const[length, setLength] = useState(false)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  // let dataLength = data.length 
  // if(dataLength > 0){
  //   setLength(true)
  // }

  const handleAdd = () => {
        const payload = {
          title : query,
          id : uuidv4() ,
          status : false 
       }
       setData([...data, payload])
  }
  const handleDelete = (id) => {
    const newData = data.filter((elem) => elem.id !== id)
    setData(newData)
  }
// console.log(data)
  return  (
    <>
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={handleChange} />
      <button data-cy="add-task-button" onClick={handleAdd}>Add</button>
     
    </div>
     {
      data.map((elem) => {
        return <Task {...elem} key={elem.id} handleDelete={handleDelete}/>
      })
    } 
    </>
  ) 

};

export default AddTask;
