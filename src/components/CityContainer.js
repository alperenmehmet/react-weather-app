import React, { useState } from 'react';
import { useGlobalContext } from '../context';

export const CityContainer = () => {
  const { city, setCity } = useGlobalContext();

  const clickHandler = (e) => {
    e.preventDefault();
    setCity('');
  };

  return (
    <form className='city-container'>
      <input
        type='text'
        placeholder='Search Location'
        className='city-input'
        onChange={(e) => setCity(e.target.value)}
      />
      <button className='btn btn-dark' onClick={clickHandler}>
        SEARCH
      </button>
    </form>
  );
};
