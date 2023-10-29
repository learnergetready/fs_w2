import {useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import peopleService from './services/persons'
import axios from 'axios'

const App = () => {

  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('+358')
  const [filterNames, setNewFilterNames] = useState('')

  useEffect(() => {
    peopleService
      .getAll()
      .then( initialPeople => setPersons(initialPeople))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if( persons.every( person => person.name !== newName) ) {
      const newPerson = { name: newName, 
                          number: newNumber }
      
      peopleService
        .create(newPerson)
        .then(returnedPerson => 
          setPersons(persons.concat(returnedPerson)))
    
      setNewName("")
      setNewNumber("+358")

    } else {
      alert(`${newName} is already added to Phonebook`)
    }
  }

  const handleFilter = (event) => setNewFilterNames(event.target.value)

  const handleChangeName = (event) => setNewName(event.target.value)
  const handleChangeNumber = (event) => setNewNumber(event.target.value)

  const handleDelete = (nixedPerson) => {
    if(window.confirm(`Delete ${nixedPerson.name} ?`)) {
      peopleService.deletePerson(nixedPerson.id)
      setPersons(persons.filter(person => person.id !== nixedPerson.id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter filterNames={filterNames} handleFilter={handleFilter} />
      
      <h3>Add a new person</h3>

      <PersonForm addPerson={addPerson} newName={newName} handleChangeName={handleChangeName} newNumber={newNumber} handleChangeNumber={handleChangeNumber} />
      
      <h3>Numbers</h3>
      
      <Persons persons={persons} filterNames={filterNames} handleDelete={handleDelete} />
    
    </div>
  )

}

export default App