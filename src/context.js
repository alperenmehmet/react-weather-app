import React, { useCallback, useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchWeather = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=london&APPID=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        setWeather(data);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchWeather();
  }, [setWeather]);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
