import React, { useRef } from 'react';
import axios from 'axios';

type Props = {
  getTasks: () => void;
};

type NewTodo = {
  title: string;
  due_date?: string;
};

const AddTodo = (props: Props) => {
  const titleText = useRef<HTMLInputElement>(null);
  const dueDateText = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (titleText.current === null) return;
    if (titleText.current.value === '')
      return alert('Todoを入力してください!!');
    let newTodo: NewTodo = {
      title: titleText.current.value,
      due_date: dueDateText.current?.value,
    };
    axios
      .post('http://localhost:8000/tasks', newTodo)
      .then((res) => {
        props.getTasks();
        titleText.current.value = '';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <input
        className="inputTodo shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Todoを追加"
        ref={titleText}
      />
      <input
        className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="date"
        ref={dueDateText}
      />
      <button
        className="mt-2 shadow-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={addTodo}
      >
        追加
      </button>
    </div>
  );
};

export default AddTodo;
