import React, { useState } from "react";
import { Form, Dropdown, Col, Row } from "react-bootstrap";
import axios from 'axios';
import CurrentWeather from "./CurrentWeather";
import SearchCurrentLocation from './SearchCurrentLocation';
import DailyForecast from "./DailyForecast";
import ChartHourlyForecast from './ChartHourlyForecast'

export default function Search(props) {
  let [favedList, setFavedList] = useState(['Kosice', 'San Jose', 'Paris'])
  
  let [city,setCity] = useState(props.defaultCity)
  let [tempUnitIndicator,setTempUnitIndicator] = useState('metric')
  let [currentWeather,setCurrentWeather] = useState({ready: false})

  function updateCurrentWeather (response) {
      console.log(response)
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
    const key = "9ec2a4429dcdbe4e388875969b764e7e";
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
  function updateTempUnitIndicator (unit) {
    setTempUnitIndicator(unit)
  }
  function updateNewFavedCityList(newList) {
    setFavedList(newList)
  }
  function displayDropDownList () {
    favedList.map( item => {
      return (
        <Dropdown.Item id={`${item}`} onClick={()=> {setCity(item)}} >
                {item}
              </Dropdown.Item>
      )
    })
  }
  if(currentWeather.ready) {
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
              {displayDropDownList}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <CurrentWeather favedCities={updateNewFavedCityList} unitChange={updateTempUnitIndicator} currentWeather={currentWeather} tempUnitIndicator={tempUnitIndicator}/>
      <ChartHourlyForecast city={currentWeather.cityName} tempUnitIndicator={tempUnitIndicator} />
      <DailyForecast timezone={currentWeather.timezone} location={currentWeather.location} tempUnitIndicator={tempUnitIndicator}/>
    </div>
    );
  } else {
    searchAPI();
    return null
  }
}
