import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('+358')
  const [filterNames, setNewFilterNames] = useState('ada')

  const addPerson = (event) => {
    event.preventDefault()

    if( persons.every( person => person.name !== newName) ) {
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
      <h2>Phonebook</h2>
      
      <Filter filterNames={filterNames} handleFilter={handleFilter} />
      
      <h3>Add a new person</h3>

      <PersonForm addPerson={addPerson} newName={newName} handleChangeName={handleChangeName} newNumber={newNumber} handleChangeNumber={handleChangeNumber} />
      
      <h3>Numbers</h3>
      
      <Persons persons={persons} filterNames={filterNames}/>
    
    </div>
  )

}

export default App