const Countries = ({choices}) => {
    return (
        <div>
          {choices.map(choice => <p key={choice.name.common}>{choice.name.common}</p>)}
        </div>
)}

export default Countries