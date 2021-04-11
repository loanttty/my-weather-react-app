import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import { Line } from 'react-chartjs-2';

export default function ChartHourlyForecast(props) {
  const {city,tempUnitIndicator} = props;
  let [labels,setLabels] = useState([]);
  let [hourlyTemp,setHourlyTemp] = useState([]);
  let [loaded, setLoaded] = useState(false);

  const changingHourlyTemp = useRef(hourlyTemp);
  const changingLabels = useRef(labels);
  
  function apiCall () {
    changingHourlyTemp.current.splice(0,8);
    changingLabels.current.splice(0,8);
    console.log(changingLabels.current);
    console.log(changingHourlyTemp.current);

    const key = "9ec2a4429dcdbe4e388875969b764e7e";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&cnt=40&units=${tempUnitIndicator}`;
    axios.get(forecastUrl).then((response) => {
      console.log(response);
      let i;
      for (i = 0; i < 8; i++) {
        changingHourlyTemp.current.push(Math.round(response.data.list[i].main.temp))
      };
      setHourlyTemp(changingHourlyTemp);
      
      for (i = 0; i < 8; i++) {
      /**
       * *Convert epoch according to current time of searched place and push to labels of xAxis
       */
      const d = new Date (response.data.list[i].dt*1000);
      const localTime = d.getTime();
      const localOffset = d.getTimezoneOffset() * 60000;
      const utc = localTime + localOffset;
      const timeConverted = utc + response.data.city.timezone * 1000; //convert a UNIX timestamp to JS
      const localDate = new Date(timeConverted);
      const hour = localDate.getHours();
      
      changingLabels.current.push(`${hour}:00`)
      }
      setLabels(changingLabels)
      setLoaded(true)
      console.log(hourlyTemp)
      console.log(labels)
    }
    );
  };
  
  useEffect(() => {
    setLoaded(false)
  },[city])

  if(loaded) {
    return (
      <div className="chart">
      <Line 
        data={{
          labels: labels,
          datasets: [{
            label: 'Day Temperature',
            data: hourlyTemp,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
          }]
        }}
        option={{
          legend: {
            display: false,
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: 'palevioletred'
              }
            }],
            yAxes: [{
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: false,
                max: 120
              }
            }],
          },
          plugins: {
            datalabels: {
              display: true,
              align: 'top',
              color: 'palevioletred'
            }
          },
          tooltips: false
        }}
        />
    </div>
  )
} else {
  apiCall();
  return null
}
}
