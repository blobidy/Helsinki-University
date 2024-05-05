const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = ({ course }) => {
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    )
  }

  const Parts = ({ parts }) => {
    return (
      <div>
        {course.map(parts => (
          <h1>{parts[0].name} {parts[0].exercises} </h1>
        ))}
      </div>
    )
  }
  

  console.log(course.name)
  console.log(course.parts[0].name, course.parts[0].exercises)
  console.log(course.parts[1].name, course.parts[1].exercises)
  console.log(course.parts[2].name, course.parts[2].exercises)

  return (
    <div>
      <Header course={course} />
      <Parts part={course.parts} />
    </div>
  )
}

export default App;