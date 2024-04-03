import React from "react";
import Todo from "./Todo";

type Props = {
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

const TodoList = (props: Props) => {
  return (
    <>
      {props.todos.map((todo) => {
        return <div key={todo.id}>
          <Todo todo={todo} todos={props.todos} setTodos={props.setTodos} getTasks={props.getTasks} />
        </div>
      })}
    </>)
};

export default TodoList;