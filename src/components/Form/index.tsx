import React from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

class Form extends React.Component<{
	setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
	state = {
		task: "",
		time: "00:00",
	};

	AddTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		this.props.setTasks((previousTasks) => [
			...previousTasks,
			{
				...this.state,
				selected: false,
				completed: false,
				id: uuidv4(),
			},
		]);
		this.setState({
			task: "",
			time: "00:00",
		});
	}

	render() {
		return (
			<form
				className={style.novaTarefa}
				onSubmit={this.AddTask.bind(this)}
			>
				<div className={style.inputContainer}>
					<label htmlFor="tarefa">Adicione um novo estudo.</label>
					<input
						type="text"
						name="tarefa"
						id="tarefa"
						value={this.state.task}
						onChange={(e) =>
							this.setState({
								...this.state,
								task: e.target.value,
							})
						}
						placeholder="O que você quer estudar?"
						required
					/>
				</div>
				<div className={style.inputContainer}>
					<label htmlFor="tempo">Insira dois</label>
					<input
						type="time"
						step="1"
						name="tempo"
						value={this.state.time}
						onChange={(e) =>
							this.setState({
								...this.state,
								time: e.target.value,
							})
						}
						id="tempo"
						min="00:00:01"
						max="24:00:00"
						required
					/>
				</div>
				<Button type="submit">Adicionar</Button>
			</form>
		);
	}
}

export default Form;
