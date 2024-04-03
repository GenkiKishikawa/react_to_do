import React from "react";
import DeleteTodo from "./DeleteTodo";
import axios from "axios";

type Props = {
  todo: {
    id: number;
    title: string;
    due_date: string;
    done: boolean;
  }
  todos: {
    id: number;
    title: string;
    due_date: string;
    done: boolean;
  }[]
  setTodos: (todo: {
    id: number;
    title: string;
    due_date: string;
    done: boolean;
  }[]) => void
  getTasks: () => void
}

type Todos = {
  id: number;
  title: string;
  due_date: string;  
  done: boolean;
}[];

const Todo = (props: Props) => {
  const toggleTodo = () => {
    if(!props.todo.done){
      axios.put(`http://localhost:8000/tasks/${props.todo.id}/done`)
        .then((res) => {
          props.getTasks();
        });
    }else{
      axios.delete(`http://localhost:8000/tasks/${props.todo.id}/done`)
        .then((res) => {
          props.getTasks();
        });
    }
  }

  const DeleteTodo = () => {
    axios.delete(`http://localhost:8000/tasks/${props.todo.id}`)
      .then((res) => {
        props.getTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return <>
    <div className="todo">
      <input className="checkTodo" id={String(props.todo.id)} type="checkbox" checked={props.todo.done} onChange={toggleTodo} readOnly />
      <label htmlFor={String(props.todo.id)}>{props.todo.title} : {props.todo.due_date}</label>
      <button onClick={DeleteTodo}>Todoを削除</button>
    </div>
  </>;
};

export default Todo;