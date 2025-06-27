import React, { useReducer } from 'react';
import { todoReducer } from '../reducer/todoReducer';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div className="todo-container">
      <h1 className="title">Todo App (useReducer)</h1>
      <TodoInput dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
};

export default TodoApp;
