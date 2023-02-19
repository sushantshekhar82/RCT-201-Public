import React from "react";

const TodoList = ({ todos = [] }) => {
  return (
    <div data-testid="todo-wrapper">
      {todos.map((todo) => (
        <li data-testid="todo-wrapper" key={todo.id}>
          <input
            data-testid="todo-item-checkbox"
            type="checkbox"
            checked={todo.isCompleted}
          />
          <span data-testid="todo-item-value">{todo.value}</span>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
