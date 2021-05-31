import React from "react";

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <h1 class="my-class">{props.name}</h1>
      <b>{props.children}</b>
    </div>
  );
};

export default Hello;
