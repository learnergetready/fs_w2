import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
      number: '+358401231244'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('+358')

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

  const handleChangeName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map( person => <p key={person.name}>{person.name} {person.number}</p> )}
    </div>
  )

}

export default App