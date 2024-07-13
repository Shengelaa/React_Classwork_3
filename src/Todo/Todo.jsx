import React from "react";

const Todo = () => {
  const todos = [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Explore advanced React topics", completed: false },
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
