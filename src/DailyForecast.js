import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from 'axios';

export default function DailyForecast(props) {
  let [loaded,setLoaded] = useState(false);
  let [forecast,setForecast] = useState(null);
  const {location,tempUnitIndicator} = props;
  
  function apiCall () {
    const key = "e799217a4276d0646d61cfe92b79802b";
    const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=minutely,alert,hourly&appid=${key}&units=${tempUnitIndicator}`;
        axios.get(forecastUrl).then(response => {
          setForecast(response.data.daily)
        })
  }

  useEffect(() => {
    setLoaded(true)
  },[props.location])
  
  if (loaded) {
    return (
      <div className=''>
        <Col>
          <Row className="row-future-day justify-content-center">Thu</Row>
          <Row className="row-future-date justify-content-center">11/03</Row>
          <Row className="row-future-icon justify-content-center">⛅</Row>
          <Row className="row-future-weather justify-content-center">
            <span className="number forecast">32</span>
            <span className="no-celcius">°</span>
          </Row>
        </Col>
      </div>
    );
  } else {
    apiCall();
    return null;
  }
}
