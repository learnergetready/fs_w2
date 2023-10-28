import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('+358')
  const [filterNames, setNewFilterNames] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if( persons.every( person => person.name !== newName &&
                                 person.number !== newNumber) ) {
      const newPerson = { name: newName, 
                          number: newNumber }
      setPersons(persons.concat(newPerson))
    } else {
      alert(`${newName} is already added to Phonebook`)
    }
    setNewName("")
    setNewNumber("+358")
  }

  const handleChangeName = (event) => setNewName(event.target.value)

  const handleChangeNumber = (event) => setNewNumber(event.target.value)

  const handleFilter = (event) => setNewFilterNames(event.target.value)


  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with: <input value={filterNames} onChange={handleFilter} />
      </div>
      <h2>Add a new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter( (person => person.name.toLowerCase().includes( filterNames.toLowerCase() ) ) ).map( person => <p key={person.name}>{person.name} {person.number}</p> )}
    </div>
  )

}

export default App