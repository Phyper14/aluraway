import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

interface Props {
	selectedTask: ITask | undefined;
}
export default function Stopwatch({ selectedTask }: Props) {
	const [time, setTime] = useState<number>();

	useEffect(() => {
		if (selectedTask?.time) {
			setTime(timeToSeconds(selectedTask.time));
		}
	}, [selectedTask]);

	return (
		<div className={style.stopwatch}>
			<p className={style.title}>Escolha um card e inicie o cronômetro</p>
			<div className={style.clockWrapper}>
				<Clock time={time} />
			</div>
			<div>
				<Button>Começar!</Button>
			</div>
		</div>
	);
}
