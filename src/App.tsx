import React, { useState } from 'react';
import './App.css';
import InputFelid from './components/InputFelid';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");  // todo 하나
  const [todos, setTodos] = useState<Todo[]>([]); // todo 목록들

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    
    if(todo){
     setTodos([...todos,{id: Date.now(), todo: todo, isDone: false }])
     setTodo("");
  }
  };

  return (
    <div className="App">
      <span className='heading'>Task</span>
      <InputFelid todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
