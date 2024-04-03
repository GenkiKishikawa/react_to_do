import React, { useRef } from "react";
import axios from "axios";

type Props = {
  getTasks: () => void;
};

const AddTodo = (props: Props) => {
  const titleText = useRef<HTMLInputElement>(null)
  const dueDateText = useRef<HTMLInputElement>(null)

  const addTodo = () => {
    if (titleText.current === null) return
    if (titleText.current.value === "") return alert("Todoを入力してください!!");
    let todo = { title: titleText.current.value, due_date: dueDateText.current?.value }
	  axios.post('http://localhost:8000/tasks', todo)
      .then((res) => {
        props.getTasks();
        titleText.current.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div>
        <input className="inputTodo" type="text" placeholder="Todoを追加" ref={titleText}/>
        <input  ref={dueDateText} type="date" />
        <button onClick={addTodo}>追加</button>
      </div>
    </>
  );
};

export default AddTodo;