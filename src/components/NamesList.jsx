import React from "react";
import Person from "./Person";
//const NamesList = () => {
function NamesList() {
  const persons = [
    {
      id: 1,
      name: "sudhakar",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Raj",
      age: 30,
      skill: "Javascript",
    },
  ];

  return (
    <React.Fragment>
      {persons.map((person, index) => (
        <Person key={person.id} person={person}></Person>
      ))}
    </React.Fragment>
  );
}

export default NamesList;
