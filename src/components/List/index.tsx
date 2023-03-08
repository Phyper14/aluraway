import style from "./List.module.scss";
import Item from "./item/index";
import { ITask } from "../../types/task";

function List(props: { tasks: ITask[] }) {
	const { tasks } = props;
	return (
		<aside className={style.listaTarefas}>
			<h2>Estudos do dia</h2>
			<ul>
				{tasks.map((item, index) => (
					<Item key={index} {...item} />
				))}
			</ul>
		</aside>
	);
}

export default List;
