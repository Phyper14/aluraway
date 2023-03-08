import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { ITask } from "../types/task";
import style from "./App.module.scss";

function App() {
	const [tasks, setTasks] = useState<ITask[]>([]);
	const [selectedTask, setSelectedTask] = useState<ITask>();

	function selectTask(focusTask: ITask) {
		setSelectedTask(focusTask);
		setTasks((previousTasks) =>
			previousTasks.map((prevTask) => ({
				...prevTask,
				selected: prevTask.id === focusTask.id ? true : false,
			}))
		);
	}

	return (
		<div className={style.AppStyle}>
			<Form setTasks={setTasks} />
			<List tasks={tasks} selectTask={selectTask} />
			<Stopwatch selectedTask={selectedTask} />
		</div>
	);
}

export default App;
