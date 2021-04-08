import react from 'react';

export default function CurrentWeather (props) {
	const {dt, timezone} = props;

	const d = new Date (dt);
	const localTime = d.getTime();
	const localOffset = d.getTimezoneOffset() * 60000;
	const utc = localTime + localOffset;
	const timeConverted = utc + timezone * 1000; //convert a UNIX timestamp to JS
	
	const localDate = new Date(timeConverted);
	let date = localDate.getDate();
	let hour = localDate.getHours();
	let minute = localDate.getMinutes();
	let year = localDate.getFullYear();
	
	let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	let day = days[localDate.getDay()];
	
	let months = ["Jan", "Feb",	"Mar", "Apr", "May", "Jun",	"Jul", "Aug", "Sep", "Oct",	"Nov", "Dec"];
	let month = months[localDate.getMonth()];

return(
	<div className=''>
			{day}, {month} {date} {year} {hour < 10 ? `0${hour}`: `${hour}`}:{minute < 10 ? `0${minute}`: `${minute}`}
		</div>
	)
}