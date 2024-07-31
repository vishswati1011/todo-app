import React from "react";
import styles from './todo.module.css';

const TodoItem = ({ todos,handleDelete,handleComplete }) => {
    
return (
    <div className={styles.todo_list}>
    <label>Your Todos</label>
    <div className={styles.todo_view}>
         {todos &&
             todos?.map((todo, index) => (
                 <div key={index} className={styles.list}>
                     <input type="checkbox" className={styles.checkbox_css} onClick={()=>handleComplete(index)} checked={todo?.status}/>
                     <span style={{ textDecoration: todo?.status ? "line-through" : "none" }}>{todo?.name}</span>
                     <button onClick={()=>handleDelete(index)}>Delete</button>
                 </div>
             ))}
             </div>
 </div>
);
};

export default TodoItem;
