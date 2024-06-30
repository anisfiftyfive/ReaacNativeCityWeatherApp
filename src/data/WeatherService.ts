import axios from 'axios';

const API_KEY = '2ead327db48b49f28e6134655242706'; // API key for weather api
const BASE_URL = 'http://api.weatherapi.com/v1/current.json'; // URL to access weather

export const getWeather = async (city: string) => {
const response =await axios.get( `${BASE_URL}?key= ${ API_KEY}&q= ${city}`);
console.log(response.data);

  return response.data;
};