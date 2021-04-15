import React from "react";
import axios from 'axios';

export default function SearchCurrentLocation(props) {

	function clickCurrentLocation (event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition((response) => {
			let lat = response.coords.latitude
			let lon =  response.coords.longitude
	  	const key = "9ec2a4429dcdbe4e388875969b764e7e";
		  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${props.tempUnitIndicator}`;
		  axios.get(url).then((response) => {
			  props.updateCurrentWeather(response);
		  })
		})
  }

	return (
		<div className='searchCurrentLocation'>
			<button className=" btn search-current" onClick={clickCurrentLocation} >
				<i className="fas fa-map-marker-alt" />
			</button>
		</div>
	)
}