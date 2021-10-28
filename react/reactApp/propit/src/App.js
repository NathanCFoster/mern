import './App.css';
import PersonCard from './components/PersonCard';
import React from 'react';

var person1 = {
  firstName:"Jane",
  lastName:"Doe",
  age:"45",
  hairColor:"Black"
}
var person2 = {
  firstName:"John",
  lastName:"Smith",
  age:"88",
  hairColor:"Brown"
}
var person3 = {
  firstName:"Millard",
  lastName:"Fillmore",
  age:"50",
  hairColor:"Brown"
}
var person4 = {
  firstName:"Maria",
  lastName:"Smith",
  age:"62",
  hairColor:"Brown"
}
function App() {
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
      <PersonCard person={person1}></PersonCard>
      <PersonCard person={person2}></PersonCard>
      <PersonCard person={person3}></PersonCard>
      <PersonCard person={person4}></PersonCard>
    </div>
  );
}

export default App;
