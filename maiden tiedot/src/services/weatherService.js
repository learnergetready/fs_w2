import axios from "axios"
const api_key = import.meta.env.VITE_OWM_KEY
const cityWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q="

const getCityWeather = (props) => 
  axios
    .get(`${cityWeatherUrl}${props}&APPID=${api_key}`)
    .then(response => response.data)

export default {getCityWeather}