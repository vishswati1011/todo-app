
import './App.css';
import TodoApp from './todo/todoApp';
import User from './user/user';
import  {TodoContext} from  './todo/todoContext';
import React, {useState} from 'react';

function App() { 
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoContext.Provider value={{todos,setTodos}}>
      <TodoApp />
      {/* <User /> */}
      </TodoContext.Provider>
    </div>
  );
}

export default App;
