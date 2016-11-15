import axios from 'axios';

const API_KEY = 'db4611cdd5d1a1c135f6d4f3b2b832b9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Variable to hold Action Type
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log('Request: ', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}