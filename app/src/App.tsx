import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

type Todos = {
  id: number;
  title: string;
  due_date: string;
  done: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);

  const getTasks = () => {
    axios
      .get('http://localhost:8000/tasks')
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl text-center font-extrabold p-5 mb-10 bg-white rounded-lg shadow-md">
        Todoアプリ
      </h1>
      <AddTodo getTasks={getTasks} />
      <TodoList todos={todos} setTodos={setTodos} getTasks={getTasks} />
    </div>
  );
}

export default App;
