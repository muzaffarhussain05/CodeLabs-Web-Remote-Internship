import React, { useState } from 'react';

const TodoInput = ({ dispatch }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD', payload: input });
      setInput('');
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
