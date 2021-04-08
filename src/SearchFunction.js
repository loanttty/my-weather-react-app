import React, { useState } from "react";
import { Form, Dropdown, Col, Row } from "react-bootstrap";
import axios from 'axios';
import CurrentWeather from "./CurrentWeather";
import SearchCurrentLocation from './SearchCurrentLocation';
import DailyForecast from "./DailyForecast";

export default function Search(props) {
  let [city,setCity] = useState(props.defaultCity)
  let [tempUnitIndicator,setTempUnitIndicator] = useState('metric')
  let [currentWeather,setCurrentWeather] = useState({ready: false})
  
  function updateCurrentWeather (response) {
			setCurrentWeather({
				ready: true,
				cityName: response.data.name,
				feelLike: Math.round(response.data.main.feels_like),
				windSpeed: Math.round(response.data.wind.speed),
				humidity: Math.round(response.data.main.humidity),
				temp: Math.round(response.data.main.temp),
				bigIcon: response.data.weather[0].icon,
				desc: response.data.weather[0].main,
				currentMax: Math.round(response.data.main.temp_max),
				currentMin: Math.round(response.data.main.temp_min),
				dt: response.data.dt*1000,
				timezone: response.data.timezone,
        location:response.data.coord,
			})
  }
  function searchAPI () {
    const key = "e799217a4276d0646d61cfe92b79802b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&&units=${tempUnitIndicator}`;
    axios.get(url).then(updateCurrentWeather)
  }
  function updateCity (event) {
    setCity(event.target.value)
  }
  function handleCityEntered (event) {
    event.preventDefault();
    searchAPI();
  }
  
    return (
      <div className="search">
      <Row className="row-search">
        <Col xs={8}>
          <Form onSubmit={handleCityEntered}>
            <Form.Control
              id="enter-city"
              type="text"
              placeholder="Enter City"
              onChange={updateCity}
              />
            <button type="submit" className="btn search-button">
              <i className="fas fa-search-location" />
            </button>
          </Form>
        </Col>
        <Col xs={2}>
          <SearchCurrentLocation tempUnitIndicator={tempUnitIndicator} updateCurrentWeather={updateCurrentWeather}/>
        </Col>
        <Col xs={2}>
          <Dropdown>
            <Dropdown.Toggle id="dropdown">
              <i className="fas fa-heart" id="heart1" />
            </Dropdown.Toggle>
            <Dropdown.Menu id="dropdown-menu">
              <Dropdown.Item id="dropdown-item" className="Kosice">
                Kosice
              </Dropdown.Item>
              <Dropdown.Item id="dropdown-item" className="San-Jose">
                San Jose
              </Dropdown.Item>
              <Dropdown.Item id="dropdown-item" className="Paris">
                Paris
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      {currentWeather.ready && <CurrentWeather currentWeather={currentWeather} />}
      <Row md={5}>
        {currentWeather.ready && <DailyForecast location={currentWeather.location} tempUnitIndicator={tempUnitIndicator}/>}
      </Row>
    </div>
    );
}
