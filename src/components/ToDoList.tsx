import React, { useState } from 'react';
import styled from 'styled-components';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Container = styled.div`
  padding: 30px;
  background-color: #fff3e0; /* 크림 색상 배경 */
  border-radius: 15px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
`;

const Title = styled.h1`
  color: #3b6b4f; /* 올리브 그린 */
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 15px;
  font-size: 1.2rem;
  border: 2px solid #d1d5db;
  border-radius: 10px;
  margin-right: 10px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3b6b4f; /* 포커스 시 올리브 그린 */
  }
`;

const AddButton = styled.button`
  padding: 15px 25px;
  font-size: 1rem;
  background-color: #3b6b4f; /* 올리브 그린 */
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2e4c3b; /* 어두운 올리브 그린 */
  }
`;

const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoItem = styled.li<{ completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 2px solid #e5e7eb;
  background-color: #fff; /* 흰색 배경 */
  border-radius: 10px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ffe6eb; /* 부드러운 피치 색상 */
    transform: translateY(-3px);
  }

  span {
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
    color: ${({ completed }) => (completed ? '#999' : '#374151')};
    font-size: 1.2rem;
  }
`;

const DeleteButton = styled.button`
  background-color: #ef4444; /* 삭제 버튼은 눈에 띄는 빨간색 */
  padding: 8px 15px;
  font-size: 1rem;
  border-radius: 10px;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dc2626; /* 호버 시 더 짙은 빨간색 */
  }
`;

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <Title>To do List</Title>
      <InputContainer>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <AddButton onClick={addTodo}>추가</AddButton>
      </InputContainer>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} completed={todo.completed}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <DeleteButton onClick={() => deleteTodo(todo.id)}>삭제</DeleteButton>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};

export default ToDoList;