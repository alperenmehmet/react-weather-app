import React from 'react';

export const WeatherInfo = () => {
  return (
    <div className='info-side'>
      <div className='today-info-container'>
        <div className='today-info'>
          <div className='precipitation'>
            {' '}
            <span className='title'>PRECIPITATION</span>
            <span className='value'>0 %</span>
            <div className='clear'></div>
          </div>
          <div className='humidity'>
            {' '}
            <span className='title'>HUMIDITY</span>
            <span className='value'>34 %</span>
            <div className='clear'></div>
          </div>
          <div className='wind'>
            {' '}
            <span className='title'>WIND</span>
            <span className='value'>0 km/h</span>
            <div className='clear'></div>
          </div>
        </div>
      </div>
      <div className='week-container'>
        <ul className='week-list'>
          <li className='active'>
            <i className='day-icon' data-feather='sun'></i>
            <span className='day-name'>Tue</span>
            <span className='day-temp'>29°C</span>
          </li>
          <li>
            <i className='day-icon' data-feather='cloud'></i>
            <span className='day-name'>Wed</span>
            <span className='day-temp'>21°C</span>
          </li>
          <li>
            <i className='day-icon' data-feather='cloud-snow'></i>
            <span className='day-name'>Thu</span>
            <span className='day-temp'>08°C</span>
          </li>
          <li>
            <i className='day-icon' data-feather='cloud-rain'></i>
            <span className='day-name'>Fry</span>
            <span className='day-temp'>19°C</span>
          </li>
        </ul>
        <div>
          <form>
            <input type='text' placeholder='Search' />
          </form>
        </div>
      </div>
    </div>
  );
};
