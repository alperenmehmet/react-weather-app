import axios from 'axios';

export const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const API_URL = `${BASE_URL}forecast/hourly?q=London&appid=${API_KEY}`;
