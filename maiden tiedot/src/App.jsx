import { useEffect, useState } from 'react'
import Countries from './components/Countries'
import Result from './components/Result'
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

  const handleChange = (event) => setSearchTerm(event.target.value)

  if(choices === null || choices.length > 10) {
    return <div>find coutries: <input value={searchTerm} onChange={handleChange}></input></div>
  }

  if(choices.length === 1) {
    return (
      <div>
        find coutries: <input value={searchTerm} onChange={handleChange}></input>
        <div><Result country={choices[0] } /></div>
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

export default App