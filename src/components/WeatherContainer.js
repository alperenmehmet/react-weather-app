import React, { useEffect } from 'react';

const URL = `https://api.openweathermap.org/data/2.5/hourly?q=London,uk&APPID=${API_KEY}`;

export const WeatherContainer = () => {
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className='weather-side'>
      <div className='weather-gradient'></div>
      <div className='date-container'>
        <h2 className='date-dayname'>Tuesday</h2>
        <span className='date-day'>15 Jan 2019</span>
        <i className='location-icon' data-feather='map-pin'></i>
        <span className='location'>Paris, FR</span>
      </div>
      <div className='weather-container'>
        <i className='weather-icon' data-feather='sun'></i>
        <h1 className='weather-temp'>29°C</h1>
        <h3 className='weather-desc'>Sunny</h3>
      </div>
    </div>
  );
};
