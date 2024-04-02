import React, { useState } from 'react';
import './main.css';

// This is the main function using states 
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

    // This function is created to handle the input values
  function handleChange(e) {
    setInput(e.target.value);
  }

    // This function describe how the input task is added in the feed
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

    // This is the function to deleting the existing task
  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
