import React from 'react';

const TodoItem = ({ todo, dispatch }) => {
  return (
    <li className={`todo-item ${todo.done ? 'completed' : ''}`}>
      <span onClick={() => dispatch({ type: 'TOGGLE', payload: todo.id })}>
        {todo.text}
      </span>
      <button onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
