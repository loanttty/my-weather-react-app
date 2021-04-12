import React from "react";
import { Col, Row } from "react-bootstrap";

export default function DisplayDailyForecast(props) {
  const {data, timezone} = props;

  const d = new Date (data.dt*1000);
	const localTime = d.getTime();
	const localOffset = d.getTimezoneOffset() * 60000;
	const utc = localTime + localOffset;
	const timeConverted = utc + timezone * 1000; //convert a UNIX timestamp to JS
	
	const localDate = new Date(timeConverted);
	const date = localDate.getDate();
	
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	const day = days[localDate.getDay()];
	
	const month = localDate.getMonth()+1;

	const icon = data.weather[0].icon;
	const tempMax = Math.round(data.temp.max);
	const tempMin = Math.round(data.temp.min);
	return (
			<Col>
				<Row className="row-future-day justify-content-center">{day}</Row>
				<Row className="row-future-date justify-content-center">{date < 10 ? `0${date}`: `${date}`}/{month <10 ? `0${month}`: `${month}`}</Row>
				<Row className="row-future-icon justify-content-center">
					<img src = {`https://openweathermap.org/img/wn/${icon}@2x.png`} />
				</Row>
				<Row className="row-future-weather justify-content-center">
					<span className="number forecast">{tempMax}</span>
					<span className="noCelcius">°</span>/
					<span className="number forecast">{tempMin}</span>
					<span className="noCelcius">°</span>
				</Row>
			</Col>
	)
}