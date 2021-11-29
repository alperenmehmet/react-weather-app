import axios from 'axios';

const API_KEY = '77cf909c9da049f66c389043347938a5';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/';

export const getWeather = async (cityName) => {
  const result = await axios
    .get(`${BASE_URL}weather?q=${cityName}&appid=${API_KEY}`)
    .then(({ data }) => data);
  return result;
};
