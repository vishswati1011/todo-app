import React from "react";
import styles from './todo.module.css';

function TodoForm({ handleTodoCreate }) {
  const [todo, setTodo] = React.useState("");

  const handleFormSubmit = (e) => {
    console.log(e.keyCode);
    if(e.keyCode===13 && todo!=""){
      handleTodoCreate(todo);
      setTodo("");
    }
  };

  return (
    <div className={styles.todo_form}>
      <div className={styles.todo_input}>
      <label>Add new todo</label> 
      <input
        type="text"
        placeholder="Enter to save"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e)=>handleFormSubmit(e)}
      />
      </div>
    </div>
  );
}

export default TodoForm;
