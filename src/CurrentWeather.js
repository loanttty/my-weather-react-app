import react, { useState } from 'react';
import { Row} from "react-bootstrap";
import DisplayTimeAndDate from "./DisplayTimeAndDate";

export default function CurrentWeather (props) {
	const {tempUnitIndicator,currentWeather} = props
	let [unit,setUnit] = useState('C')
	let [favedCities,setFavedCities] = useState(['Kosice', 'San Jose', 'Paris'])

	function checkFaved (city) {
		const cityInList = favedCities.filter(favedCity => favedCity === city);
		return cityInList.length > 0
	}
	
	function updateUnit () {
		setUnit('F');
		props.unitChange('imperial');
	}
	
	function updateFavoriteCity () {
		let changingFavedCities = useRef(favedCities)
		if (checkFaved(currentWeather.cityName)) {
			let newList = changingFavedCities.current.filter(cityName => cityName !== currentWeather.cityName)
			setFavedCities(newList)
		} else {
			let newList = changingFavedCities.current.push(currentWeather.cityName)
			setFavedCities(newList)
		}
		props.favedCities(favedCities)
	}
	return(
		<div className='currentWeather' >
				<Row className="row-place justify-content-center">
					<span className="city">{currentWeather.cityName}</span>
					<span style={{ width: "fit-content" }}>
						<i className={checkFaved(currentWeather.cityName)? "fas fa-heart" : "far fa-heart"} id="heart2" onClick={updateFavoriteCity}/>
					</span>
				</Row>
				<Row className="row-date justify-content-center">
					<DisplayTimeAndDate dt={currentWeather.dt} timezone={currentWeather.timezone} />
				</Row>
				<Row className="row-info justify-content-center">
					Real Feel
					<span
						className="number real-feel"
						style={{ width: "fit-content", paddingLeft: "5px" }}
					>
						{currentWeather.feelLike}
					</span>
					<span
						className="celcius"
						style={{ width: "fit-content", paddingRight: "5px" }}
					>
						°{unit}
					</span>{" "}
					| WindSpeed:
					<span
						className="wind-speed"
						style={{ width: "fit-content", paddingLeft: "5px" }}
					>
						{currentWeather.windSpeed}
					</span>
					km/h
				</Row>
				<Row className="row-info justify-content-center">
					Humidity:
					<span className="humidity" style={{ width: "fit-content" }}>
						{currentWeather.humidity}
					</span>
					%
				</Row>
				<Row className="big justify-content-center">
					<span
						className="icon-big"
						style={{ width: "fit-content", padding: 0 }}
					>
						<img src = {`https://openweathermap.org/img/wn/${currentWeather.bigIcon}@2x.png`} alt='weatherIcon' />
					</span>
					<span className="number-big" style={{ width: "fit-content" }}>
						{currentWeather.temp}
					</span>
					<span className="celcius-big" style={{ width: "fit-content" }}>
						°{unit}
					</span>
					<span className="divider" style={{ width: "fit-content" }}>
						|
					</span>
					<button
						className="farenheit-conversion"
						style={{ width: "fit-content" }}
						onClick={updateUnit}
					>
						°{tempUnitIndicator === 'metric' ? 'F' : 'C'}
					</button>
				</Row>
				<Row className="row-desc justify-content-center">Clear</Row>
				<Row className="row-max-min justify-content-center">
					<span
						className="number current-max"
						style={{ width: "fit-content" }}
					>
						{currentWeather.currentMax}
					</span>
					<span className="celcius" style={{ width: "fit-content" }}>
						°C
					</span>
					/
					<span
						className="number current-min"
						style={{ width: "fit-content" }}
					>
						{currentWeather.currentMin}
					</span>
					<span className="celcius" style={{ width: "fit-content" }}>
						°C
					</span>
				</Row>
		</div>
	)
}