import React from 'react';
import { useGlobalContext } from '../context';

const WeatherInfo = () => {
  const { weather } = useGlobalContext();
  console.log(weather);

  return (
    <div className='container'>
      <div className='weather-side'>
        <div className='weather-gradient'></div>
        <div className='date-container'>
          <h2 className='date-dayname'>{weather.list[0].dt_txt}</h2>
          <span className='date-day'>{weather.list[0].dt_txt}</span>
          <i className='location-icon' data-feather='map-pin'></i>
          <span className='location'>
            {weather.city.name}, {weather.city.country}
          </span>
        </div>
        <div className='weather-container'>
          <i className='weather-icon' data-feather='sun'></i>
          <h1 className='weather-temp'>{weather.list[0].main.temp}°C</h1>
          <h3 className='weather-desc'>{weather.list[0].weather[0].main}</h3>
        </div>
      </div>
      <div className='info-side'>
        <div className='today-info-container'>
          <div className='today-info'>
            <div className='precipitation'>
              <span className='title'>PRECIPITATION</span>
              <span className='value'>{weather.list[0].main.humidity} %</span>
              <div className='clear'></div>
            </div>
            <div className='humidity'>
              <span className='title'>HUMIDITY</span>
              <span className='value'>{weather.list[0].main.humidity} %</span>
              <div className='clear'></div>
            </div>
            <div className='wind'>
              <span className='title'>WIND</span>
              <span className='value'>{weather.list[0].wind.speed} km/h</span>
              <div className='clear'></div>
            </div>
          </div>
        </div>
        <div className='week-container'>
          <ul className='week-list'>
            <li className='active'>
              <i className='day-icon' data-feather='sun'></i>
              <span className='day-name'>{weather.list[0].dt_txt}</span>
              <span className='day-temp'>{weather.list[0].main.temp}°C</span>
            </li>
            <li>
              <i className='day-icon' data-feather='cloud'></i>
              <span className='day-name'>{weather.list[1].dt_txt}</span>
              <span className='day-temp'>{weather.list[1].main.temp}°C</span>
            </li>
            <li>
              <i className='day-icon' data-feather='cloud-snow'></i>
              <span className='day-name'>{weather.list[2].dt_txt}</span>
              <span className='day-temp'>{weather.list[2].main.temp}°C</span>
            </li>
            <li>
              <i className='day-icon' data-feather='cloud-rain'></i>
              <span className='day-name'>{weather.list[3].dt_txt}</span>
              <span className='day-temp'>{weather.list[3].main.temp}°C</span>
            </li>
            <div className='clear'></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
