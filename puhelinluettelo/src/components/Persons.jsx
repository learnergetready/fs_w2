import Person from "./Person"

const Persons = ({persons, filterNames}) => {
    return(
    <div>
       {persons.filter( (person => person.name.toLowerCase().includes( filterNames.toLowerCase() ) ) )
               .map( person => <Person key={person.name} person={person}/> )}
    </div>
    )
}

export default Persons