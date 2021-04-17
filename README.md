# Weather App coded in React

This app has some highlighted functions below:
* Display current weather and time of searched location
* Unit (Celcius/Farenheit) conversion
* Function to mark or unmarked specific city as a favorite one which can be accessed via a designated drop-down list
* Daily forecast
* Houry forecast illustrated by Line Chart.js
* Display weather of current location
* Change background according to sunset/sunrise time of the searched place
* Open-sourced in GitHub and hosted by Netlify under this link https://flamboyant-hugle-b09bea.netlify.app

## TL;DR

To get started right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Default CSS file 
    ├── App.js # App structure and background-color changing function according to sunrise and sunset time
    ├── ChartHourlyForecast.js # Display hourly forecast in chart.js
    ├── CurrentWeather.js # Display current weather info 
    ├── DailyForecast.js # Call API to get 5-day forecast data
    ├── DisplayDailyForecast.js # Display 5-day forecast
    ├── DisplayTimeAndDate.js # Display time and date of searched location    
    ├── SearchCurrentLocation.js # Used to get the coordinates of one location    
    ├── SearchFunction.js # Contains api call to get current weather of city in state
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```
