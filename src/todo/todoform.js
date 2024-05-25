import React from "react";

function TodoForm({ handleTodoCreate }) {
  const [todo, setTodo] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleTodoCreate(todo);
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={(e) => handleFormSubmit(e)}>Add</button>
    </div>
  );
}

export default TodoForm;
