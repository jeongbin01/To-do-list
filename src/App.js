import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Calendar from './components/Calendar';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [currentTodo, setCurrentTodo] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : {};
  });
  const [tempNote, setTempNote] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (selectedDate) {
      setTempNote(notes[selectedDate] || '');
    }
  }, [selectedDate, notes]);

  const addTodo = (newTodo) => {
    const todoWithDate = { ...newTodo, date: selectedDate || new Date().toISOString().split('T')[0] };
    setTodos((prevTodos) => [...prevTodos, todoWithDate]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...updatedTodo, date: todo.date } : todo))
    );
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  const handleSaveNote = () => {
    if (selectedDate) {
      setNotes(prev => ({
        ...prev,
        [selectedDate]: tempNote.trim()
      }));
      setIsEditing(false);
    }
  };

  const handleDeleteNote = () => {
    if (selectedDate) {
      setNotes(prev => {
        const updatedNotes = {...prev};
        delete updatedNotes[selectedDate];
        return updatedNotes;
      });
      setIsEditing(false);
      setTempNote('');
    }
  };

  const handleEditNote = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setTempNote(notes[selectedDate] || '');
  };

  const filteredTodos = todos
    .filter((todo) => {
      const matchesSearch = todo.task.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDate = selectedDate ? todo.date === selectedDate : true;
      return matchesSearch && matchesDate;
    })
    .sort((a, b) => {
      const priorityOrder = { '높음': 3, '보통': 2, '낮음': 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

  return (
    <div className="todo-container">
      <h1>할 일 목록</h1>

      <Calendar setSelectedDate={setSelectedDate} selectedDate={selectedDate} />

      {selectedDate && (
        <div className="memo-container">
          <h2>{selectedDate} 메모</h2>
          {!isEditing ? (
            <div className="memo-view">
              {notes[selectedDate] ? (
                <>
                  <p>{notes[selectedDate]}</p>
                  <div className="memo-buttons">
                    <button onClick={handleEditNote}>메모 수정</button>
                    <button onClick={handleDeleteNote}>메모 삭제</button>
                  </div>
                </>
              ) : (
                <button onClick={handleEditNote}>메모 추가</button>
              )}
            </div>
          ) : (
            <div className="memo-edit">
              <textarea
                value={tempNote}
                onChange={(e) => setTempNote(e.target.value)}
                placeholder="메모를 입력하세요"
                autoFocus
              />
              <div className="memo-edit-buttons">
                <button onClick={handleSaveNote}>저장</button>
                <button onClick={handleCancelEdit}>취소</button>
              </div>
            </div>
          )}
        </div>
      )}

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="검색어를 입력하세요"
      />

      <TodoForm
        addTodo={addTodo}
        updateTodo={updateTodo}
        currentTodo={currentTodo}
        clearCurrent={() => setCurrentTodo(null)}
      />

      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        setCurrentTodo={setCurrentTodo}
      />
    </div>
  );
}

export default App;