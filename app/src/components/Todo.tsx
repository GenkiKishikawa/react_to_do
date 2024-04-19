import React from "react";
import { API } from "../axios";

type Props = {
  todo: {
    id: number;
    title: string;
    due_date: string;
    done: boolean;
  };
  todos: {
    id: number;
    title: string;
    due_date: string;
    done: boolean;
  }[];
  setTodos: (
    todo: {
      id: number;
      title: string;
      due_date: string;
      done: boolean;
    }[]
  ) => void;
  getTasks: () => void;
};

type Todos = {
  id: number;
  title: string;
  due_date: string;
  done: boolean;
}[];

const Todo = (props: Props) => {
  const toggleTodo = () => {
    if (!props.todo.done) {
      API.put(`/${props.todo.id}/done`)
        .then((res) => {
          props.getTasks();
        });
    } else {
      API.delete(`/${props.todo.id}/done`)
        .then((res) => {
          props.getTasks();
        });
    }
  };

  const DeleteTodo = () => {
    API.delete(`/tasks/${props.todo.id}`)
      .then((res) => {
        props.getTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-between bg-white hover:bg-gray-100 p-4 rounded-lg shadow mb-2">
      <div className="flex items-center">
        <input
          className="form-checkbox h-5 w-5 text-blue-600 rounded"
          id={String(props.todo.id)}
          type="checkbox"
          checked={props.todo.done}
          onChange={toggleTodo}
          readOnly
        />
        <label
          htmlFor={String(props.todo.id)}
          className={`ml-2 text-lg ${props.todo.done ? 'line-through' : ''}`}
        >
          {props.todo.title} : {props.todo.due_date}
        </label>
      </div>
      <button
        onClick={DeleteTodo}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        削除
      </button>
    </div>
  );
};

export default Todo;
