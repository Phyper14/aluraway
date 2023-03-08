export function timeToSeconds(time: string) {
	const [hours = 0, minutes = 0, seconds = 0] = time.split(":");

	const hoursInSeconds = Number(hours) * 3600;
	const minutesInSeconds = Number(minutes) * 60;
	return hoursInSeconds + minutesInSeconds + Number(seconds);
}

export function timeToMinutes(time: number) {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	const [minutesTen, minutesUnit] = String(minutes).padStart(2, "0");
	const [secondsTen, secondsUnit] = String(seconds).padStart(2, "0");
	return { minutesTen, minutesUnit, secondsTen, secondsUnit };
}
