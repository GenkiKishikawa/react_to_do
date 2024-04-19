import React from 'react';
import Todo from './Todo';

type Props = {
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

const TodoList = (props: Props) => {
  return (
    <div className="mt-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {props.todos.map((todo) => {
        return (
          <div key={todo.id} className="p-4">
            <Todo todo={todo} getTasks={props.getTasks} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
