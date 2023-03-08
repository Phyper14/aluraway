import { timeToMinutes } from "../../../common/utils/time";
import style from "../Clock/Clock.module.scss";
export default function Clock({ time = 0 }: { time: number | undefined }) {
	const { minutesTen, minutesUnit, secondsTen, secondsUnit } =
		timeToMinutes(time);

	return (
		<>
			<span className={style.clockNumber}>{minutesTen}</span>
			<span className={style.clockNumber}>{minutesUnit}</span>
			<span className={style.clockDivisor}>:</span>
			<span className={style.clockNumber}>{secondsTen}</span>
			<span className={style.clockNumber}>{secondsUnit}</span>
		</>
	);
}
