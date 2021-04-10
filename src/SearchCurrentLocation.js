import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function SearchCurrentLocation(props) {
	let [location,setLocation] = useState({
    	lon: null,
    	lat: null,
		apiCall: false
  })

	function clickCurrentLocation (event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition((response) => {
      setLocation({
        lat: response.coords.latitude,
        lon: response.coords.longitude,
		apiCall: true
      })
		})
  }

	useEffect(() => {
		const key = "9ec2a4429dcdbe4e388875969b764e7e";
		if (location.apiCall) {
			let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${key}&units=${props.tempUnitIndicator}`;
			axios.get(url).then((response) => {
				props.updateCurrentWeather(response);
				console.log(response);
			})
			setLocation({apiCall: false})
		}
		console.log(location);
	})
	
	return (
		<div className='searchCurrentLocation'>
			<button className=" btn search-current" onClick={clickCurrentLocation} >
				<i className="fas fa-map-marker-alt" />
			</button>
		</div>
	)
}