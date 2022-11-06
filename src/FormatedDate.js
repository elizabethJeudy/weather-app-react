export default function FormatedDate(props) {
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	let day = days[props.date.getDay()];
	let hours = props.date.getHours();
	if (hours < 10) {
		hours = `0${hours}`;
	}
	let minutes = props.date.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	return `${day} ${hours}:${minutes}`;
}
