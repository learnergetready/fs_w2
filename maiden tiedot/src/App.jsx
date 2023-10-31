import { useEffect, useState } from 'react'
import Countries from './components/Countries'
import Result from './components/Result'
import Weather from './components/Weather'
import countryService from './services/countryService'
import weatherService from './services/weatherService'

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [allCountries, setAllCountries] = useState(null)
  const [choices, setChoices] = useState(null)
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    countryService
      .getAll()
        .then(allCountries => setAllCountries(allCountries))
  }, [])

  useEffect(() => {
    if(allCountries !== null){
      const filteredCountries = allCountries.filter( country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) )
      setChoices(filteredCountries)
    }
  }, [searchTerm])

  useEffect(() => {
    if(choices === null) {
      setWeather(null)
    }

    if(choices !== null && choices.length === 1) {
      const cityCommaCountry = `${choices[0].capital[0]},${choices[0].altSpellings[0]}`
      weatherService.getCityWeather(cityCommaCountry).then(response => setWeather(response))
    }
  }, [choices])

  const handleChange = (event) => setSearchTerm(event.target.value)

  if(choices === null || choices.length > 10) {
    return <div>find coutries: <input value={searchTerm} onChange={handleChange}></input></div>
  }

  if(choices.length === 1 && weather !== null) {
    return (
      <div>
        find coutries: <input value={searchTerm} onChange={handleChange}></input>
        
        <Result country={choices[0] } />
        
        <Weather weather={weather} />

      </div>
    )
  }

  return (
    <div>
      find coutries: <input value={searchTerm} onChange={handleChange}></input>

      <Countries choices={choices} setSearchTerm={setSearchTerm}/>
      
    </div>
  )
}

/*

*/

export default App