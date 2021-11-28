import React from 'react';

export const WeekContainer = () => {
  return (
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
        <div className='clear'></div>
      </ul>
    </div>
  );
};
