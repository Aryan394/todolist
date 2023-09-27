import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import "./ToDoWrapper.css";

export const TodoWrapper = () => {
	const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
	const [todos, setTodos] = useState(initialTodos);

	useEffect(() => {
		// Save todos to local storage whenever the todos state changes
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const addTodo = (todo) => {
		setTodos([
			...todos,
			{ id: uuidv4(), task: todo, completed: false, isEditing: false },
		]);
	};

	const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const editTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
			)
		);
	};

	const editTask = (task, id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
			)
		);
	};

	return (
		<div className="TodoWrapper">
			<h1>ToDo list for Competishun</h1>
			<TodoForm addTodo={addTodo} />
			{todos.map((todo) =>
				todo.isEditing ? (
					<EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
				) : (
					<Todo
						key={todo.id}
						task={todo}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
						toggleComplete={toggleComplete}
					/>
				)
			)}
		</div>
	);
};
