import React from 'react';

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  );
}

const Parts = ({ part1, part2, part3 }) => {
  return (
    <div>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises}</p>
    </div>
  );
}


const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  console.log(part1.name, part1.exercises, part2.name, part2.exercises, part3.name, part3.exercises)

  return (
    <div>
      <Header course={course} />
      <Parts part1={part1} part2={part2} part3={part3} />
      
    </div>
  );
}

export default App;
