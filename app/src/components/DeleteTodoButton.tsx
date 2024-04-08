import React from "react";
import axios from "axios";

type Props = {
	todo: {
		id: number;
		title: string;
		due_date: string;
		done: boolean;
	};
	getTasks: () => void;
}

const DeleteTodoButton = (props: Props) => {
	const deleteTodo = () => {
		axios.delete(`http://localhost:8000/tasks/${props.todo.id}`)
			.then((res) => {
				props.getTasks();
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className="pl-10">
			<button
				onClick={deleteTodo}
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-md focus:outline-none focus:shadow-outline"
			>
				削除
			</button>
		</div>
	);
}

export default DeleteTodoButton;