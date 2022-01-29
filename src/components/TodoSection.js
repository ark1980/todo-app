import {useState} from 'react';

import SearchTodo from "./SearchTodo";
import TodoList from "./TodoList";

const todoItems = [
  {
    "userId": 1,
    "id": 1,
    "title": "Buy Milk",
    "completed": false
    },
    {
    "userId": 1,
    "id": 2,
    "title": "Practice React",
    "completed": false
    },
    {
    "userId": 1,
    "id": 3,
    "title": "Start Working out",
    "completed": false
    },
    {
    "userId": 1,
    "id": 4,
    "title": "Install the Helium antenna",
    "completed": true
    },
]

const TodoSection =  () => {

  const [todos, setTodos] = useState(todoItems);

  return (

    <div className="todos-section">
      <div className="todos-container">
      <div className="todos-header">
        <h2>Hello User</h2>
        <p>What are your plans for the day?</p>
      </div>
      <div className="todos-body">
      <div className="todos-body-title">
        <h2>Tasks</h2>
        <div className="date">
          <p>Today</p>
          <p>Jan/23</p>
        </div>
      </div>
        <hr />
        <SearchTodo />
        <TodoList todos={todos} />
      </div>
      </div>
    </div>
  )
}

export default TodoSection;