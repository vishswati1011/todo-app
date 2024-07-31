import React from "react";
import TodoList from "./todoItem";
import TodoForm from "./todoform";
import styles from './todo.module.css';

const TodoApp = () => {
  const [todos, setTodos] = React.useState([]);

  const handleTodoCreate = (todo) => {
    // let id = Math.floor(Math.random() * 1000);
    let newTodos =[...todos];
    newTodos.push({name:todo,status:false});
    console.log(todo, "todo",todos);
    console.log(newTodos, "newTodos")
    setTodos(newTodos);
  };

  const handleComplete = (ind) => {
    let newTodos = [...todos];
    // newTodos[index].status = !newTodos[index].status;
    newTodos= newTodos?.map((item,index)=> index === ind ? {...item,status : !item?.status} : item)
    setTodos(newTodos);
  }
  const handleDelete = (ind) => {
    let newTodos = [...todos];
    // newTodos.splice(index, 1);
    newTodos = newTodos.filter((item,index)=>index !== ind)
    // console.log(newTodos, "newTodos")
    setTodos(newTodos);
  }
  return (
    <div className={styles.main}>
    <div className={styles.todo_app}>
    
    <TodoForm handleTodoCreate={handleTodoCreate} />
    
    <TodoList todos={todos} handleComplete={handleComplete} handleDelete={handleDelete} />

    </div>
  </div>
  );
};

export default TodoApp;
