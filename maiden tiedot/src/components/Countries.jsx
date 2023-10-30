const Countries = ({choices, setSearchTerm}) => {
    return (
        <div>
          {choices.map(choice => <p key={choice.name.common}>{choice.name.common}<button onClick={() => setSearchTerm(choice.name.common)}>show</button></p>)}
        </div>
)}

export default Countries