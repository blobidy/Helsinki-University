import React from 'react';

// Define Header component
const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

// Define Parts component
const Parts = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <p key={index}>{part.name} {part.exercises}</p>
      ))}
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };

  // Array containing all parts
  const allParts = [part1, part2, part3];

  return (
    <div>
      {/* Render Header component */}
      <Header course={course} />
      {/* Render Parts component */}
      <Parts parts={allParts} />
    </div>
  );
};

export default App;
