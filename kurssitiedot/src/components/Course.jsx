const Course = ({course}) => {
  const total = course.parts.reduce((accumulator, part) => accumulator + part.exercises, 0)

  return (
    <>
      <h2>{course.name}</h2>
      <div>
        {course.parts.map( part => <p key={part.id}>{part.name} {part.exercises}</p>)}
      </div>
      <p><strong>total of {total} exercises</strong></p>
    </>
  )
}

export default Course