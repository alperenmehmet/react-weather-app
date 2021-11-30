import React, { useState, useContext, useEffect } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [data, setData] = useState([]);

  return (
    <AppContext.Provider value={{ city, setCity, data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
