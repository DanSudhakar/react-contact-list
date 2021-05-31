import React from "react";

/* export default function Greet() {
  return <div>Sudhakar</div>;
} */

const Greet = (props) => {
  const { ...details } = props;
  return (
    <React.Fragment>
      <div>Hello {details.name}</div>
    </React.Fragment>
  );
};
export default Greet;
