import axios from 'axios';

const API_KEY = '';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/';

export const getWeather = async (city) => {
  const result = await axios
    .get(`${BASE_URL}weather?q=${city}&appid=${API_KEY}`)
    .then(({ data }) => data);
  return result;
};
