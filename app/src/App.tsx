import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import DeleteTodo from './components/DeleteTodo';

type Todos = {
  id: number;
  title: string;
  due_date: string;
  done: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);

  const getTasks = () => {
    axios.get('http://localhost:8000/tasks')
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="App">
      <h1>Todoアプリ</h1>
      <AddTodo getTasks={getTasks}/>
      <TodoList todos={todos} setTodos={setTodos} getTasks={getTasks}/>
      {/* <DeleteTodo todos={todos} setTodos={setTodos} /> */}
    </div>
  );
}

export default App;
