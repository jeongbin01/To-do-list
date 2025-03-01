import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo, setCurrentTodo }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span className={todo.completed ? 'completed' : ''}>
        {todo.task} ({todo.category} - {todo.priority})
      </span>
      <button onClick={() => setCurrentTodo(todo)}>수정</button>
      <button onClick={() => removeTodo(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;