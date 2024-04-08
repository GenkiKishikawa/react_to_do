import React from "react";
import axios from "axios";
import DeleteTodoButton from "./DeleteTodoButton";

type Props = {
  todo: {
    id: number;
    title: string;
    due_date: string;
    done: boolean;
  }
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
    if (!props.todo.done) {
      axios
        .put(`http://localhost:8000/tasks/${props.todo.id}/done`)
        .then((res) => {
          props.getTasks();
        });
    } else {
      axios
        .delete(`http://localhost:8000/tasks/${props.todo.id}/done`)
        .then((res) => {
          props.getTasks();
        });
    }
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
      <DeleteTodoButton todo={props.todo} getTasks={props.getTasks} />
    </div>
  );
};

export default Todo;
