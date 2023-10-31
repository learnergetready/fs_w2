const Weather = ({weather}) => {
    if (weather === null) {
      return null
    }
  
    const temp = Math.round(weather.main.temp -272.15)
    
    return(
      <div>
        <h2>Weather in {weather.name}</h2>
        <p>temperature  {temp > -1 ? `+${temp}` : temp} Celsius</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
        <p>wind {weather.wind.speed} m/s</p>
      </div>
    )
}

export default Weather