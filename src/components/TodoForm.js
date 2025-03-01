import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, updateTodo, currentTodo, clearCurrent }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('업무');
  const [priority, setPriority] = useState('보통');

  useEffect(() => {
    if (currentTodo) {
      setTask(currentTodo.task);
      setCategory(currentTodo.category);
      setPriority(currentTodo.priority);
    } else {
      resetForm();
    }
  }, [currentTodo]);

  const resetForm = () => {
    setTask('');
    setCategory('업무');
    setPriority('보통');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const newTodo = {
      task,
      category,
      priority,
      completed: false,
      id: currentTodo ? currentTodo.id : Date.now(),
    };

    if (currentTodo) {
      updateTodo(currentTodo.id, newTodo);
    } else {
      addTodo(newTodo);
    }

    clearCurrent();
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="할 일 입력"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="업무">업무</option>
        <option value="개인">개인</option>
        <option value="기타">기타</option>
      </select>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="낮음">낮음</option>
        <option value="보통">보통</option>
        <option value="높음">높음</option>
      </select>
      <button type="submit">{currentTodo ? '수정' : '추가'}</button>
    </form>
  );
};

export default TodoForm;