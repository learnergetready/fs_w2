const Result = ({country}) => {
  const flagStyle = {
    fontSize: 128,
    margin: 0
  }
  return(
    <div>
      <h2>{country.name.official}</h2>

      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h3>languages</h3>
      <ul>
      {Object.values(country.languages).map( lang => <li key={lang}>{lang}</li>)}
      </ul>
      <h1 style={flagStyle}>{country.flag}</h1>
  </div>
)}


export default Result