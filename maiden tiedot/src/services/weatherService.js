import axios from "axios"
const api_key = import.meta.env.OWM_KEY
const cityWeatherUrl = "http://api.openweathermap.org/data/25/weather?q="

const getCityWeather = ({cityDotCountry}) => 
  axios
    .get(`${cityWeatherUrl}/${cityDotCountry}&APPID=${api_key}`)
    .then(response => response.data)

export default {getCityWeather}