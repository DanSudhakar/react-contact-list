import React from "react";

const Person = (props) => {
  const { ...person } = props.person;
  return <div key={person.id}>{person.name}</div>;
};

export default Person;
