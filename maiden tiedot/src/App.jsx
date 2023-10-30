import { useEffect, useState } from 'react'
import Countries from './components/Countries'
import Result from './components/Result'
import countryService from './services/countryService'

/* tämän voisi myös tehdä niin, että kaikkia maita ei haeta joka painalluksen jälkeen uudestaan, vaan
   haetaan vain maan common-nimet omaan tauluun. Vaihtoehdot pidetään eri taulussa, ja kun sen taulun
   pituus pienenee yhteen, renderöidään vastaukset, jotka siis haetaan vasta siinä vaiheessa erikseen.
   Tai sitten ei haeta edes siinä vaiheessa, vaan käytetään sivulle tultaessa haettuja kaikkia maatietoja.
*/

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [choices, setChoices] = useState(null)
  const [result, setResult] = useState(null)

  useEffect(() => {
    countryService
      .getAll()
        .then(allCountries => allCountries.filter(
          country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase())))
        .then(countries => setChoices(countries))
  }, [searchTerm])

  const handleChange = (event) => setSearchTerm(event.target.value)

  if(choices === null || choices.length > 10) {
    return <div>find coutries: <input value={searchTerm} onChange={handleChange}></input></div>
  }

  if(choices.length === 1) {
    return (
      <div>
        find coutries: <input value={searchTerm} onChange={handleChange}></input>
        <div><Result country={choices[0]} /></div>
      </div>
    )
  }

  return (
    <div>
      find coutries: <input value={searchTerm} onChange={handleChange}></input>

      <Countries choices={choices} />
    </div>
  )
}

export default App