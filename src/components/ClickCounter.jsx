import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <label>{`Count is ${count}`}</label>

        <button onClick={incrementCount}>Clicked x times</button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
