import axios from 'axios';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';

const URL = `${cityName}&appid=${API_KEY}`;

export const getWeather = async (cityName) => {
  const response = await axios.get(`${BASE_URL}${URL}`).then((res) => res.data);
  return response.data;
};
