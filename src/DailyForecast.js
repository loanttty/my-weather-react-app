import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import axios from 'axios';
import DisplayDailyForecast from './DisplayDailyForecast';

export default function DailyForecast(props) {
  let [loaded,setLoaded] = useState(false);
  let [forecast,setForecast] = useState(null);
  const {timezone,location,tempUnitIndicator} = props;
  
  function apiCall () {
    const key = "9ec2a4429dcdbe4e388875969b764e7e";
    if (location !== undefined) {
      const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=minutely,alert,hourly&appid=${key}&units=${tempUnitIndicator}`;
      axios.get(forecastUrl).then(response => {
        setForecast(response.data.daily);
        setLoaded(true)
      })
    }
  }

  useEffect(() => {
    setLoaded(false)
  },[location])
  
  if (loaded) {
    return (
      <div className='displayDailyForecast'>
        <Row md={5}>
          {forecast.map((days,index) => {
            if(index < 6 && index > 0 ) {
              return <DisplayDailyForecast key={index} data={days} timezone={timezone}/>
            } else {
              return null
            }
          })}
        </Row>
      </div>
    );
  } else {
    apiCall();
    return null;
  }
}
